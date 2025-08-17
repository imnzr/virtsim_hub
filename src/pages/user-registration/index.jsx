import React from 'react';
import Header from '../../components/ui/Header';
import RegistrationForm from './components/RegistrationForm';
import TrustIndicators from './components/TrustIndicators';
import SecurityBadge from './components/SecurityBadge';

const UserRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Bergabung dengan VirtSIM Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Mulai perjalanan Anda di ekosistem telekomunikasi virtual Indonesia. 
                Dapatkan akses ke marketplace SIM virtual terpercaya.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Registration Form */}
              <div className="order-2 lg:order-1">
                <RegistrationForm />
              </div>
              
              {/* Trust Indicators & Benefits */}
              <div className="order-1 lg:order-2 space-y-8">
                <TrustIndicators />
                <SecurityBadge />
                
                {/* Benefits List */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Mengapa Memilih VirtSIM Hub?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Harga Transparan</p>
                        <p className="text-sm text-muted-foreground">Tidak ada biaya tersembunyi, semua harga jelas</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Aktivasi Instan</p>
                        <p className="text-sm text-muted-foreground">SIM virtual aktif dalam hitungan menit</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Dukungan 24/7</p>
                        <p className="text-sm text-muted-foreground">Tim support selalu siap membantu Anda</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                      </div>
                      <div>
                        <p className="text-foreground font-medium">Keamanan Terjamin</p>
                        <p className="text-sm text-muted-foreground">Data Anda dilindungi dengan standar keamanan tinggi</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserRegistration;