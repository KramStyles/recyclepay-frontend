import React from 'react';
import { DashHeader, Text } from 'components';
import { RecentPickups, Welcome } from '../../components';
import './index.css';
import { pickups } from '../../components/molecules/RecentPickups/pickups';

export const OverviewPage = () => (
  <div className="overview">
    <div className="header">
      <DashHeader />
    </div>
    <div className="welcome">
      <Welcome />
    </div>
    <div className="head-text">
      <Text>Recent Pickups</Text>
      <div className="right-text">
        <Text>Your Total Points</Text>
        &nbsp;1769
      </div>
    </div>
    <div>
      {pickups.map((item) => {
        console.log(item, 'it work');
        return <RecentPickups {...item} key={item.id} />;
      })}
    </div>
  </div>
);
