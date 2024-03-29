import { ReactNode, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import DashedTypography from "components/DashedTypography";
import { useToggle } from "hooks/useToggle";

type ExpandableListProps<T> = {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  maxRows?: number;
};

const ExpandableList = <T,>({ items, render, maxRows = undefined }: ExpandableListProps<T>) => {
  const [isExpanded, setIsExpanded] = useToggle(false);

  const content = useMemo(() => {
    const max = isExpanded ? items.length : maxRows;
    const itemsToShow = items.slice(0, max);
    return itemsToShow.map((item, i) => render(item, i));
  }, [isExpanded, items, maxRows, render]);

  const expander = () => (
    <DashedTypography onClick={() => setIsExpanded()}>
      <FormattedMessage id={isExpanded ? "showLess" : "showMore"} />
    </DashedTypography>
  );

  const showExpander = isExpanded || content.length !== items.length;

  return (
    <>
      {content}
      {showExpander && expander()}
    </>
  );
};

export default ExpandableList;
