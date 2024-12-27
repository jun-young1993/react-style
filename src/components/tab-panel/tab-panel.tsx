import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#fff' : '#f9f9f9')};
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #007bff' : 'none')};
  color: ${({ isActive }) => (isActive ? '#007bff' : '#000')};
  outline: none;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const TabPanelWrapper = styled.div`
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
`;

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const TabComponent: React.FC<TabProps> = ({ children }) => <>{children}</>;

interface TabPanelProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]; // 단일 또는 배열
}

const TabPanel: React.FC<TabPanelProps> & { Tab: React.FC<TabProps> } = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  // children을 항상 배열로 변환
  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[];

  return (
    <TabContainer>
      <TabList>
        {tabs.map((child, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </Tab>
        ))}
      </TabList>
      <TabPanelWrapper>{tabs[activeTab]}</TabPanelWrapper>
    </TabContainer>
  );
};

TabPanel.Tab = TabComponent;

export default TabPanel;
