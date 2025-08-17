import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const RegistrationForm = () => {
  const [accountType, setAccountType] = useState('individual');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  // Password strength calculation
  React.useEffect(() => {
    const calculateStrength = (pwd) => {
      let strength = 0;
      if (pwd?.length >= 8) strength += 1;
      if (/[A-Z]/?.test(pwd)) strength += 1;
      if (/[a-z]/?.test(pwd)) strength += 1;
      if (/[0-9]/?.test(pwd)) strength += 1;
      if (/[^A-Za-z0-9]/?.test(pwd)) strength += 1;
      return strength;
    };
    setPasswordStrength(calculateStrength(password));
  }, [password]);

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength <= 2) return 'Lemah';
    if (passwordStrength <= 3) return 'Sedang';
    if (passwordStrength <= 4) return 'Kuat';
    return 'Sangat Kuat';
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-destructive';
    if (passwordStrength <= 3) return 'bg-warning';
    if (passwordStrength <= 4) return 'bg-accent';
    return 'bg-success';
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration data:', data);
      // Handle successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const phoneCountryOptions = [
    { value: '+62', label: '+62 (Indonesia)' }
  ];

  const accountTypeOptions = [
    { value: 'individual', label: 'Individual' },
    { value: 'business', label: 'Business' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Daftar Akun Baru</h2>
        <p className="text-muted-foreground mt-2">
          Lengkapi form berikut untuk membuat akun VirtSIM Hub
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Account Type Selection */}
        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">
            Tipe Akun <span className="text-destructive">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {accountTypeOptions?.map((option) => (
              <button
                key={option?.value}
                type="button"
                onClick={() => {
                  setAccountType(option?.value);
                  setValue('accountType', option?.value);
                }}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  accountType === option?.value
                    ? 'border-primary bg-primary/5 text-foreground'
                    : 'border-border hover:border-muted-foreground text-muted-foreground'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon 
                    name={option?.value === 'individual' ? 'User' : 'Building'} 
                    size={20} 
                  />
                  <span className="font-medium">{option?.label}</span>
                </div>
              </button>
            ))}
          </div>
          <input
            type="hidden"
            {...register('accountType', { required: 'Pilih tipe akun' })}
            value={accountType}
          />
          {errors?.accountType && (
            <p className="text-sm text-destructive mt-1">{errors?.accountType?.message}</p>
          )}
        </div>

        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="nama@email.com"
          required
          error={errors?.email?.message}
          {...register('email', {
            required: 'Email harus diisi',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Format email tidak valid'
            }
          })}
        />

        {/* Password */}
        <div className="space-y-2">
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Minimal 8 karakter"
              required
              error={errors?.password?.message}
              {...register('password', {
                required: 'Password harus diisi',
                minLength: {
                  value: 8,
                  message: 'Password minimal 8 karakter'
                }
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={18} />
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {password && (
            <div className="space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded ${
                      i < passwordStrength ? getPasswordStrengthColor() : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              {passwordStrength > 0 && (
                <p className={`text-xs ${
                  passwordStrength <= 2 ? 'text-destructive' : 
                  passwordStrength <= 3 ? 'text-warning' : 
                  passwordStrength <= 4 ? 'text-accent' : 'text-success'
                }`}>
                  Kekuatan Password: {getPasswordStrengthText()}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <Input
            label="Konfirmasi Password"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Ulangi password"
            required
            error={errors?.confirmPassword?.message}
            {...register('confirmPassword', {
              required: 'Konfirmasi password harus diisi',
              validate: value => value === password || 'Password tidak sama'
            })}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-8 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name={showConfirmPassword ? 'EyeOff' : 'Eye'} size={18} />
          </button>
        </div>

        {/* Phone Number */}
        <div className="grid grid-cols-3 gap-3">
          <Select
            label="Kode Negara"
            options={phoneCountryOptions}
            defaultValue="+62"
            {...register('countryCode')}
          />
          <div className="col-span-2">
            <Input
              label="Nomor Telepon"
              type="tel"
              placeholder="8123456789"
              required
              error={errors?.phoneNumber?.message}
              {...register('phoneNumber', {
                required: 'Nomor telepon harus diisi',
                pattern: {
                  value: /^[0-9]{10,13}$/,
                  message: 'Nomor telepon tidak valid'
                }
              })}
            />
          </div>
        </div>

        {/* Business Fields */}
        {accountType === 'business' && (
          <>
            <Input
              label="Nama Perusahaan"
              placeholder="PT. Nama Perusahaan"
              required
              error={errors?.companyName?.message}
              {...register('companyName', {
                required: accountType === 'business' ? 'Nama perusahaan harus diisi' : false
              })}
            />
            <Input
              label="NPWP Perusahaan"
              placeholder="01.234.567.8-901.000"
              error={errors?.taxId?.message}
              {...register('taxId', {
                pattern: {
                  value: /^[0-9.-]+$/,
                  message: 'Format NPWP tidak valid'
                }
              })}
            />
          </>
        )}

        {/* Referral Code */}
        <Input
          label="Kode Referral (Opsional)"
          placeholder="Masukkan kode referral"
          description="Dapatkan bonus dengan kode referral dari teman"
          {...register('referralCode')}
        />

        {/* Terms and Privacy */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              {...register('terms', {
                required: 'Anda harus menyetujui syarat dan ketentuan'
              })}
            />
            <label htmlFor="terms" className="text-sm text-foreground leading-relaxed">
              Saya menyetujui{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Syarat dan Ketentuan
              </a>{' '}
              serta{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Kebijakan Privasi
              </a>{' '}
              VirtSIM Hub
            </label>
          </div>
          {errors?.terms && (
            <p className="text-sm text-destructive">{errors?.terms?.message}</p>
          )}

          <div className="flex items-start space-x-3">
            <Checkbox
              id="marketing"
              {...register('marketing')}
            />
            <label htmlFor="marketing" className="text-sm text-muted-foreground leading-relaxed">
              Saya ingin menerima informasi promosi dan update produk via email
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={isLoading}
          className="h-12"
        >
          {isLoading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
        </Button>

        {/* Social Registration */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Atau daftar dengan</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            iconName="Mail"
            iconPosition="left"
            disabled={isLoading}
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            iconName="Facebook"
            iconPosition="left"
            disabled={isLoading}
          >
            Facebook
          </Button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Sudah punya akun?{' '}
            <a href="/user-login" className="text-primary hover:underline font-medium">
              Masuk di sini
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;