import { Stack } from "@mui/material";
import { FormattedMessage } from "react-intl";
import SummaryList from "components/SummaryList";
import { ALIBABA_CNR, AWS_CNR, AZURE_CNR, AZURE_TENANT, GCP_CNR, KUBERNETES_CNR, NEBIUS, DATABRICKS } from "utils/constants";
import { SPACING_2 } from "utils/layouts";
import { ChildrenList } from "./ChildrenList";
import { K8sHelp } from "./Help";
import {
  AlibabaProperties,
  AwsProperties,
  AzureProperties,
  NebiusProperties,
  GcpProperties,
  K8sProperties,
  DatabricksProperties
} from "./Properties";

const DataSourceDetails = ({ id, accountId, parentId, type, config = {} }) => {
  const Properties = {
    [AWS_CNR]: AwsProperties,
    [AZURE_CNR]: AzureProperties,
    [AZURE_TENANT]: AzureProperties,
    [GCP_CNR]: GcpProperties,
    [ALIBABA_CNR]: AlibabaProperties,
    [KUBERNETES_CNR]: K8sProperties,
    [NEBIUS]: NebiusProperties,
    [DATABRICKS]: DatabricksProperties
  }[type];

  const renderHelp = {
    [KUBERNETES_CNR]: () => <K8sHelp dataSourceId={id} user={config.user} />
  }[type];

  const childrenList = {
    [AZURE_TENANT]: ChildrenList
  }[type];

  return (
    <Stack spacing={SPACING_2}>
      {Properties && (
        <div>
          <SummaryList
            titleMessage={<FormattedMessage id="properties" />}
            items={<Properties config={config} accountId={accountId} id={id} parentId={parentId} />}
          />
        </div>
      )}
      {renderHelp && <div>{renderHelp()}</div>}
      {childrenList && (
        <div>
          <ChildrenList parentId={id} />
        </div>
      )}
    </Stack>
  );
};

export default DataSourceDetails;
