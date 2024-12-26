import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 정의
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

const TabPanel = styled.div`
  padding: 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
`;

// 타입 정의
interface TabPanelItem {
  label: string;
  content: React.ReactNode;
}

interface TabPanelProps {
  tabs: TabPanelItem[];
}

// 컴포넌트 정의
const TabPanelComponent: React.FC<TabPanelProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanel>{tabs[activeTab]?.content}</TabPanel>
    </TabContainer>
  );
};

export default TabPanelComponent;
