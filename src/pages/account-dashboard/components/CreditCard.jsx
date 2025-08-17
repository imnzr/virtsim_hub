import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CreditCard = ({ balance, onTopUp, onViewHistory }) => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Wallet" size={24} color="white" />
          <h3 className="text-lg font-semibold">Credit Balance</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="History"
          iconPosition="left"
          onClick={onViewHistory}
          className="text-white hover:bg-white/10"
        >
          History
        </Button>
      </div>
      <div className="mb-6">
        <p className="text-white/80 text-sm mb-1">Available Balance</p>
        <p className="text-3xl font-bold">Rp {balance?.toLocaleString('id-ID')}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-white/80 text-xs mb-1">This Month</p>
          <p className="text-lg font-semibold">Rp 245.000</p>
        </div>
        <div>
          <p className="text-white/80 text-xs mb-1">Last Top-up</p>
          <p className="text-lg font-semibold">15 Aug 2025</p>
        </div>
      </div>
      <Button
        variant="secondary"
        fullWidth
        iconName="Plus"
        iconPosition="left"
        onClick={onTopUp}
        className="bg-white text-primary hover:bg-white/90"
      >
        Top Up Credits
      </Button>
    </div>
  );
};

export default CreditCard;