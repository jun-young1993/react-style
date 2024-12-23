import { Meta, StoryObj } from "@storybook/react";
import Table from "./table";
import { FullScreen } from "../../components/screen";

export default {
    title: 'Components/Table',
    component: Table
} as Meta<typeof Table>

type Story = StoryObj<typeof Table>
const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
    { key: 'email', label: 'Email' },
  ];
  
  const data = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 4, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 5, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 6, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 7, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 8, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 9, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 4, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 5, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 6, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 7, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 8, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 9, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 4, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 5, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 6, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 7, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 8, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 9, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 4, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 5, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 6, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
    { id: 7, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 8, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 9, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
  ];
export const TableDefault: Story = {
    render: (args) => {
        const columns = [
            { key: 'id', label: 'ID' },
            { key: 'name', label: 'Name' },
            { key: 'age', label: 'Age' },
            { key: 'email', label: 'Email' }
          ];
          
          const data = [
            { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
            { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
          ];
          
        return (
            <div>
                <h1>Dynamic Table Example</h1>
                <Table $columns={columns} $data={data} />
            </div>
        )
    }
}

export const TableScroll: Story = {
    render: (args) => {
 
          
        return (
            <FullScreen>
                <Table $columns={columns} $data={data} $scrollable={true} $onRowClick={() => {console.log('hi')}}/>
            </FullScreen>
        )
    }
}

export const TableStickyScroll: Story = {
    render: (args) => {
          
        return (
            <FullScreen>
                <Table $columns={columns} $data={data} $scrollable={true} $sticky={false} />
            </FullScreen>
        )
    }
}