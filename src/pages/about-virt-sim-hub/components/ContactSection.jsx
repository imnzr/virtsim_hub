import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Kantor Pusat',
      details: ['Jl. Sudirman No. 123, Jakarta Pusat', 'DKI Jakarta 10220, Indonesia']
    },
    {
      icon: 'Phone',
      title: 'Telepon',
      details: ['+62 21 1234 5678', '+62 811 2345 6789 (WhatsApp)']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@virtsimhub.id', 'support@virtsimhub.id']
    },
    {
      icon: 'Clock',
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 09:00 - 18:00 WIB', 'Support 24/7 Online']
    }
  ];

  const socialLinks = [
    { icon: 'Linkedin', name: 'LinkedIn', url: '#' },
    { icon: 'Twitter', name: 'Twitter', url: '#' },
    { icon: 'Instagram', name: 'Instagram', url: '#' },
    { icon: 'Youtube', name: 'YouTube', url: '#' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Hubungi Tim VirtSIM Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, konsultasi, atau kemitraan bisnis. 
            Tim ahli kami tersedia untuk memberikan solusi virtual SIM terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {contactInfo?.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={info?.icon} size={20} color="white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info?.title}</h4>
                      {info?.details?.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="h-64 bg-muted flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="VirtSIM Hub Office Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=-6.2088,106.8456&z=15&output=embed"
                  className="border-0"
                />
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Nama Lengkap"
                  type="text"
                  name="name"
                  placeholder="Masukkan nama lengkap"
                  value={formData?.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Input
                label="Perusahaan"
                type="text"
                name="company"
                placeholder="Nama perusahaan (opsional)"
                value={formData?.company}
                onChange={handleInputChange}
              />
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData?.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                iconName="Send"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                Kirim Pesan
              </Button>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Atau hubungi langsung:</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  className="text-sm"
                >
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-sm"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;