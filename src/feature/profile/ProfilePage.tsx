import SharedTabs from '@/components/sharedTabs/SharedTabs';
import ProfileCard from '@/feature/profile/ProfileCard';
import React from 'react';
import AllProducts from '../products/AllProducts';


const TAB_ITEMS = [
    {
        value: 'all-items', label: 'All Items', component: <AllProducts />
    },
    {
        value: 'ordered-items', label: 'Ordered Items', component: <div>dfd</div>
    },
    {
        value: 'returned-project', label: 'Return Order', component: <div>dfdfw</div>
    },
];


const ProfilePage = () => {
    return (
        <div className='container section-gap flex items-start gap-10'>
            <ProfileCard />
            <SharedTabs tabItems={TAB_ITEMS} />
        </div>
    );
};

export default ProfilePage;