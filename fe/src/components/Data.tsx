import { Box } from '@mui/material';
import { DataNode } from '../interfaces/TreeNode';
import BankData from './data/BankData';
import CityAccommodation from './data/CityAccommodation';
import CreditCardData from './data/CreditCardData';
import HelpItemData from './data/HelpItemData';
import GatheringData from './data/GatheringData';
import URLData from './data/URLData';
import SMSData from './data/SMSData';
import BloodDonationData from './data/BloodDonationData';
import TelephoneData from './data/PhoneData';
import ArticleData from './data/ArticleData';
import UsefulLinksData from './data/UsefulLinksdata';
import StemCellData from './data/StemCellData';
import VetData from './data/VetData';
import FoodDistributionData from './data/FoodDistributionData';
import VpnData from './data/VpnData';
import ContainerPharmacyData from './data/ContainerPharmacyData';

export default function Data({ dataNode }: { dataNode: DataNode }) {
  const renderData = () => {
    if (dataNode.data.dataType === 'bank-account-donation') {
      return <BankData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'beneficial-articles') {
      return <ArticleData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'blood-donationlist') {
      return <BloodDonationData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'city-accommodation') {
      return <CityAccommodation value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'credit-card-donation') {
      return <CreditCardData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'international-bank-account-donation') {
      return <BankData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'international-url-donation') {
      return <URLData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'new-gathering-list') {
      return <GatheringData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'help-item-list') {
      return <HelpItemData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'phone-number-list') {
      return <TelephoneData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'sms-donation') {
      return <SMSData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'url-donation') {
      return <URLData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'useful-links') {
      return <UsefulLinksData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'stem-cell-donation') {
      return <StemCellData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'data-vet') {
      return <VetData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'food-items') {
      return <FoodDistributionData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'vpn') {
      return <VpnData value={dataNode.data as any} />;
    }

    if (dataNode.data.dataType === 'container-pharmacy') {
      return <ContainerPharmacyData value={dataNode.data as any} />;
    }

    return <></>;
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '50px',
      }}
    >
      {renderData()}
    </Box>
  );
}
