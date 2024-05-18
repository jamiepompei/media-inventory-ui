import React from 'react';

interface WelcomeMessageProps {
  userName: string;
  isCollectionEmpty: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName, isCollectionEmpty }) => {
  return (
    <div>
      {isCollectionEmpty ? (
        <h2>Welcome {userName}! Create a new media collection:</h2>
      ) : (
        <h2>Welcome {userName}! View your media collection:</h2>
      )}
    </div>
  );
};

export default WelcomeMessage;