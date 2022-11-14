export const DATA_SOURCE = [
  {
    key: '1',
    campaignName: 'UD_FR - DBM - Amnet - CIVP',
    start: '19/05/2022',
    end: '31/05/2036',
    bookedImpressions: -1,
    deliveredImpressions: 1,
    clicks: 22,
    ctr: 100,
    cpm: 1000,
    budget: -1,
    spend: null,
    daysLeft: 4948,
    margin: 0,
    osi: null,
    platform: 'hello',
  },
  {
    key: '2',
    campaignName: 'UD_Azerion FI_Dentsu Paulig_DV360',
    start: '23/05/2022',
    end: '23/05/2036',
    bookedImpressions: -1,
    deliveredImpressions: 1,
    clicks: 22,
    ctr: 100,
    cpm: 1000,
    budget: -1,
    spend: null,
    daysLeft: 4948,
    margin: 0,
    osi: null,
    platform: 'hello',
  },
];

export const COLUMNS = [
  {
    title: 'Campaign Name',
    dataIndex: 'campaignName',
    key: 'campaignName',
  },
  {
    title: 'Start',
    dataIndex: 'start',
    key: 'start',
  },
  {
    title: 'End',
    dataIndex: 'end',
    key: 'end',
  },
  {
    title: 'Booked Impressions',
    dataIndex: 'bookedImpressions',
    key: 'bookedImpressions',
  },
  {
    title: 'Delivered Impressions',
    dataIndex: 'deliveredImpressions',
    key: 'deliveredImpressions',
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks',
  },
  {
    title: 'CTR',
    dataIndex: 'ctr',
    key: 'ctr',
  },
  {
    title: 'CPM',
    dataIndex: 'cpm',
    key: 'cpm',
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
  },
  {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'spend',
  },
  {
    title: 'Days Left',
    dataIndex: 'daysLeft',
    key: 'daysLeft',
  },
  {
    title: 'Margin',
    dataIndex: 'margin',
    key: 'margin',
  },
  {
    title: 'OSI',
    dataIndex: 'osi',
    key: 'osi',
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform',
  },
];

export const PLATFORM_OPTIONS = [
  { value: 'marketplace', label: 'Marketplace' },
  { value: 'xandr', label: 'Xandr' },
  { value: 'dv360', label: 'Dv360' },
];

export const BUSINESS_UNIT_OPTIONS = [
  { value: 'azInternal', label: 'Azerion Internal' },
  { value: 'azBD', label: 'Azerion Bangladesh' },
  { value: 'azUK', label: 'Azerion UK' },
  { value: 'azDuch', label: 'Azerion DUCH' },
];

export const STATUS_OPTIONS = [
  { value: 'draft', label: 'Draft' },
  { value: 'active', label: 'Active' },
  { value: 'pause', label: 'Pause' },
  { value: 'finished', label: 'Finished' },
];