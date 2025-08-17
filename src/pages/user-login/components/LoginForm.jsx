import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const email = watch('email', '');

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login data:', { ...data, rememberMe });
      
      // Simulate 2FA requirement for certain accounts
      if (data?.email?.includes('admin') || data?.email?.includes('business')) {
        setShowTwoFA(true);
      } else {
        // Handle successful login
        console.log('Login successful');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoginAttempts(prev => prev + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTwoFASubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('2FA verified:', data);
      // Handle successful 2FA verification
    } catch (error) {
      console.error('2FA verification failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBiometricLogin = async () => {
    try {
      // Simulate biometric authentication
      if (navigator?.credentials) {
        console.log('Biometric authentication triggered');
        // Handle biometric login
      }
    } catch (error) {
      console.error('Biometric authentication failed:', error);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login triggered`);
    // Handle social login
  };

  if (showTwoFA) {
    return (
      <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Smartphone" size={24} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Verifikasi 2FA</h2>
          <p className="text-muted-foreground mt-2">
            Masukkan kode verifikasi dari aplikasi authenticator atau SMS
          </p>
        </div>

        <form onSubmit={handleSubmit(handleTwoFASubmit)} className="space-y-6">
          <Input
            label="Kode Verifikasi"
            placeholder="123456"
            required
            className="text-center text-lg tracking-widest"
            maxLength={6}
            error={errors?.twoFACode?.message}
            {...register('twoFACode', {
              required: 'Kode verifikasi harus diisi',
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'Kode verifikasi harus 6 digit angka'
              }
            })}
          />

          <div className="space-y-3">
            <Button
              type="submit"
              fullWidth
              loading={isLoading}
              disabled={isLoading}
              className="h-12"
            >
              {isLoading ? 'Memverifikasi...' : 'Verifikasi & Masuk'}
            </Button>

            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={() => setShowTwoFA(false)}
              disabled={isLoading}
            >
              Kembali ke Login
            </Button>
          </div>

          <div className="text-center">
            <button 
              type="button" 
              className="text-sm text-primary hover:underline"
              onClick={() => console.log('Resend 2FA code')}
            >
              Kirim ulang kode verifikasi
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Selamat Datang Kembali</h2>
        <p className="text-muted-foreground mt-2">
          Masuk ke akun Anda untuk mengakses dashboard VirtSIM Hub
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Masukkan password Anda"
            required
            error={errors?.password?.message}
            {...register('password', {
              required: 'Password harus diisi'
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e?.target?.checked)}
            />
            <label htmlFor="rememberMe" className="text-sm text-foreground">
              Ingat saya
            </label>
          </div>
          <a 
            href="/forgot-password" 
            className="text-sm text-primary hover:underline font-medium"
          >
            Lupa password?
          </a>
        </div>

        {/* Login Attempts Warning */}
        {loginAttempts >= 3 && (
          <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="AlertTriangle" size={16} className="text-warning" />
              <p className="text-sm text-warning">
                Terlalu banyak percobaan login. Akun akan terkunci sementara.
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={isLoading || loginAttempts >= 5}
          className="h-12"
        >
          {isLoading ? 'Masuk...' : 'Masuk'}
        </Button>

        {/* Biometric Authentication (if supported) */}
        {navigator?.credentials && (
          <Button
            type="button"
            variant="outline"
            fullWidth
            iconName="Fingerprint"
            iconPosition="left"
            onClick={handleBiometricLogin}
            disabled={isLoading}
          >
            Login dengan Biometrik
          </Button>
        )}

        {/* Social Login */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Atau masuk dengan</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            iconName="Mail"
            iconPosition="left"
            onClick={() => handleSocialLogin('Google')}
            disabled={isLoading}
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            iconName="Facebook"
            iconPosition="left"
            onClick={() => handleSocialLogin('Facebook')}
            disabled={isLoading}
          >
            Facebook
          </Button>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Belum punya akun?{' '}
            <a href="/user-registration" className="text-primary hover:underline font-medium">
              Daftar sekarang
            </a>
          </p>
        </div>

        {/* Security Notice */}
        <div className="mt-6 p-3 bg-muted/30 rounded-lg">
          <div className="flex items-start space-x-2">
            <Icon name="Lock" size={16} className="text-muted-foreground mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Login Anda dilindungi dengan enkripsi SSL dan monitoring keamanan 24/7. 
                Jika ada aktivitas mencurigakan, kami akan mengirim notifikasi ke email Anda.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;