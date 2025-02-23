import SharedTabs from '@/components/sharedTabs/SharedTabs';
import React from 'react';


const TAB_ITEMS = [
    {
        value: 'my-project', label: 'My Project', component: <div>dfdfw</div>
    },
    {
        value: 'delivered-project', label: 'Delivered Project', component: <div>dfd</div>
    },
    {
        value: 'pending-project', label: 'Pending Project', component: <div>dfdfw</div>
    },
    {
        value: 'agreement-request', label: 'Agreement Request', component: <div>dfdw</div>
    },
    {
        value: 'cancel-request', label: 'Cancel Request', component: <div>dfdfw</div>
    },
];


const page = () => {
    return (
        <div className='container section-gap'>
            <SharedTabs tabItems={TAB_ITEMS} />
        </div>
    );
};

export default page;