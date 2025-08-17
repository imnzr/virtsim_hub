import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Chief Executive Officer',
      expertise: 'Telecommunications & Business Strategy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: '15+ tahun pengalaman di industri telekomunikasi Indonesia, mantan eksekutif di Telkomsel.',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Sari Wijaya',
      role: 'Chief Technology Officer',
      expertise: 'Software Architecture & API Development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Ahli dalam pengembangan sistem terdistribusi dan integrasi API dengan pengalaman 12+ tahun.',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      role: 'Head of Operations',
      expertise: 'Process Automation & Quality Assurance',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Spesialis dalam otomasi proses bisnis dan manajemen kualitas layanan telekomunikasi.',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Maya Putri',
      role: 'Head of Customer Success',
      expertise: 'Customer Experience & Market Analysis',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Fokus pada pengalaman pelanggan dan analisis pasar Indonesia dengan background marketing digital.',
      linkedin: '#'
    }
  ];

  const stats = [
    { label: 'Years Combined Experience', value: '50+', icon: 'Award' },
    { label: 'Team Members', value: '25+', icon: 'Users' },
    { label: 'Countries Served', value: '15+', icon: 'Globe' },
    { label: 'Customer Satisfaction', value: '98%', icon: 'Heart' }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tim Ahli dengan Pengalaman Indonesia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dipimpin oleh para profesional berpengalaman yang memahami kebutuhan pasar Indonesia dan teknologi global, 
            tim kami berkomitmen memberikan layanan virtual SIM terbaik.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-soft transition-all duration-200 group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-200">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={16} color="white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{member?.name}</h3>
                  <p className="text-primary font-medium text-sm">{member?.role}</p>
                </div>
                
                <div className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">
                  {member?.expertise}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member?.description}
                </p>
                
                <button className="w-8 h-8 bg-primary/10 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors duration-200 mx-auto">
                  <Icon name="Linkedin" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bergabung dengan Tim Kami
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kami selalu mencari talenta terbaik untuk bergabung dalam misi memajukan ekosistem telekomunikasi virtual di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Lihat Posisi Terbuka</span>
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>Kirim CV Spontan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;