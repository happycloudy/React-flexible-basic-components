import React from 'react';
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab";

const ExampleTabs = () => {
    return (
        <Tabs>
            <Tab title={'Home'}>
                This is home
            </Tab>
            <Tab title={'Posts'}>
                This is posts
            </Tab>
            <Tab title={'Links'}>
                This is links
            </Tab>
        </Tabs>
    );
};

export default ExampleTabs;