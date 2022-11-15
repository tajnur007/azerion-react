import { FC } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { PaginationProps } from 'antd';
import { DATA_SOURCE } from '../../../utils/constants/CAMPAIGN_DATA';
import { CampaignTableDataType } from './MyCampaignsTableDataTypes';
import './MyCampaignsTable.css';

const MyCampaignsTable: FC = () => {
  const paginationConfig: PaginationProps = {
    showSizeChanger: true,
    showTotal: (count) => `Total ${count} items `,
  }

  return (
    <Table
      bordered
      columns={COLUMNS}
      dataSource={DATA_SOURCE}
      className="campaign-table"
      scroll={{ x: 1300 }}
      pagination={paginationConfig}
    />
  )
}

export default MyCampaignsTable;

const COLUMNS: ColumnsType<CampaignTableDataType> = [
  {
    key: 'campaignName',
    title: 'Campaign Name',
    dataIndex: 'campaignName',
    width: 400,
    fixed: 'left',
  },
  {
    key: 'start',
    title: 'Start',
    dataIndex: 'start',
    width: 150,
  },
  {
    key: 'end',
    title: 'End',
    dataIndex: 'end',
    width: 150,
  },
  {
    key: 'bookedImpressions',
    title: 'Booked Impressions',
    dataIndex: 'bookedImpressions',
    width: 150,
  },
  {
    key: 'deliveredImpressions',
    title: 'Delivered Impressions',
    dataIndex: 'deliveredImpressions',
    width: 150,
  },
  {
    key: 'clicks',
    title: 'Clicks',
    dataIndex: 'clicks',
    width: 150,
  },
  {
    key: 'ctr',
    title: 'CTR',
    dataIndex: 'ctr',
    width: 150,
  },
  {
    key: 'cpm',
    title: 'CPM',
    dataIndex: 'cpm',
    width: 150,
  },
  {
    key: 'budget',
    title: 'Budget',
    dataIndex: 'budget',
    width: 150,
  },
  {
    key: 'spend',
    title: 'Spend',
    dataIndex: 'spend',
    width: 150,
  },
  {
    key: 'daysLeft',
    title: 'Days Left',
    dataIndex: 'daysLeft',
    width: 150,
  },
  {
    key: 'margin',
    title: 'Margin',
    dataIndex: 'margin',
    width: 150,
  },
  {
    key: 'osi',
    title: 'OSI',
    dataIndex: 'osi',
    width: 150,
  },
  {
    key: 'platform',
    title: 'Platform',
    dataIndex: 'platform',
    width: 150,
  },
];