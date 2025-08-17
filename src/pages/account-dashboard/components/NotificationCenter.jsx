import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationCenter = ({ notifications, onMarkAsRead, onMarkAllAsRead }) => {
  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'service':
        return 'Smartphone';
      case 'payment':
        return 'CreditCard';
      case 'system':
        return 'Settings';
      case 'promotion':
        return 'Gift';
      default:
        return 'Bell';
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'service':
        return 'text-blue-600 bg-blue-50';
      case 'payment':
        return 'text-green-600 bg-green-50';
      case 'system':
        return 'text-orange-600 bg-orange-50';
      case 'promotion':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const filteredNotifications = notifications?.filter(notification => {
    if (filter === 'unread') return !notification?.read;
    if (filter === 'read') return notification?.read;
    return true;
  });

  const unreadCount = notifications?.filter(n => !n?.read)?.length;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="CheckCheck"
            iconPosition="left"
            onClick={onMarkAllAsRead}
            disabled={unreadCount === 0}
          >
            Mark All Read
          </Button>
        </div>

        <div className="flex items-center space-x-4 mt-3">
          {['all', 'unread', 'read']?.map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`text-sm font-medium transition-colors duration-200 ${
                filter === filterType
                  ? 'text-primary' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              {filterType?.charAt(0)?.toUpperCase() + filterType?.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {filteredNotifications?.length === 0 ? (
          <div className="p-8 text-center">
            <Icon name="Bell" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No notifications found</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredNotifications?.map((notification) => (
              <div
                key={notification?.id}
                className={`p-4 hover:bg-muted/50 transition-colors duration-150 ${
                  !notification?.read ? 'bg-blue-50/30' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getNotificationColor(notification?.type)}`}>
                    <Icon name={getNotificationIcon(notification?.type)} size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${!notification?.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification?.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification?.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {notification?.timestamp}
                        </p>
                      </div>
                      {!notification?.read && (
                        <button
                          onClick={() => onMarkAsRead(notification?.id)}
                          className="ml-2 p-1 rounded-full hover:bg-muted transition-colors duration-150"
                        >
                          <Icon name="Check" size={14} className="text-muted-foreground" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationCenter;