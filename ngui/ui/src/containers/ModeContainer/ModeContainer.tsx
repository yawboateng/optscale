import Mode from "components/Mode";
import OrganizationOptionsService from "services/OrganizationOptionsService";
import { OPTSCALE_MODE_OPTION } from "utils/constants";

const ModeContainer = () => {
  const { useGetByName, useUpdateOption } = OrganizationOptionsService();

  const {
    isGetOrganizationOptionLoading,
    option: { value }
  } = useGetByName(OPTSCALE_MODE_OPTION);
  const { isUpdateOrganizationOptionLoading, updateOption } = useUpdateOption();

  const onApply = (option) => {
    updateOption(OPTSCALE_MODE_OPTION, { value: option });
  };

  return (
    <Mode
      isLoadingProps={{ isGetOrganizationOptionLoading, isUpdateOrganizationOptionLoading }}
      option={value}
      onApply={onApply}
    />
  );
};

export default ModeContainer;
