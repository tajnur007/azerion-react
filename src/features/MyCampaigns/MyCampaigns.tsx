import { FC, useState } from 'react';
import { Input, Button, Row, Col, Select, Table } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import './MyCampaigns.css';
import { BUSINESS_UNIT_OPTIONS, COLUMNS, DATA_SOURCE, PLATFORM_OPTIONS, STATUS_OPTIONS } from '../../utils/constants/CAMPAIGN_DATA';

const { Search } = Input;

const MyCampaigns: FC = () => {
  const [isShowFilterOptions, setIsShowFilterOptions] = useState(false);

  const onSearch = (value: string) => console.log(value);

  /** Select Handlers Start */
  const handlePlatformChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleBusinessUnitChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  const handleStatusChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  /** Select Handlers End */


  return (
    <div className="campaign-container">
      <p className="campaign-heading"> My Campaigns </p>

      <div className="search-container">
        <Search placeholder="Search" allowClear onSearch={onSearch} className="search-field" />
        <Button
          ghost
          type="primary"
          className="filter-btn"
          onClick={() => setIsShowFilterOptions(prev => !prev)}
        >
          Filters {isShowFilterOptions ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </div>

      {isShowFilterOptions && (
        <Row gutter={16} className="filter-section">
          <Col span={4}>
            <p className="filter-title"> Platform: </p>
            <Select
              showArrow
              allowClear
              mode="multiple"
              maxTagCount='responsive'
              style={{ width: '100%' }}
              placeholder="Select Platform"
              options={PLATFORM_OPTIONS}
              onChange={handlePlatformChange}
              className="filter-select"
            />
          </Col>
          <Col span={4}>
            <p className="filter-title"> Business Unit: </p>
            <Select
              showArrow
              allowClear
              mode="multiple"
              maxTagCount='responsive'
              style={{ width: '100%' }}
              placeholder="Select Business Unit"
              options={BUSINESS_UNIT_OPTIONS}
              onChange={handleBusinessUnitChange}
            />
          </Col>
          <Col span={4}>
            <p className="filter-title"> Status: </p>
            <Select
              showArrow
              style={{ width: '100%' }}
              defaultValue={'active'}
              options={STATUS_OPTIONS}
              onChange={handleStatusChange}
            />
          </Col>
          <Col span={4}>
            <Button
              ghost
              type="primary"
              className="clear-btn"
              onClick={() => null}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      )}

      <Table dataSource={DATA_SOURCE} columns={COLUMNS} className="campaign-table" />
    </div>
  );
}

export default MyCampaigns;