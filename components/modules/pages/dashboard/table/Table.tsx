import React from "react";
import { Styles } from "./Table.styles";
import Table from "./components/Table";
import NumberRangeColumnFilter from "./filter/NumberRangeColumnFilter";
import SelectColumnFilter from "./filter/SelectColumnFilter";
import SliderColumnFilter from "./filter/SliderColumnFilter";
import filterGreaterThan from "./filter/FilterGreaterThan";
import roundedMedian from "./filter/RoundedMedian";
import { ITable } from "./Table.types";

const TableContainer = ({ entries }: ITable) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Anime",
        columns: [
          {
            Header: "Id",
            accessor: "_id",
            aggregate: "count",
            Aggregated: ({ value }: any) => `${value} Names`,
          },
          {
            Header: "Title Eng",
            accessor: "titleEng",
            filter: "fuzzyText",
            aggregate: "uniqueCount",
            Aggregated: ({ value }: any) => `${value} Unique Names`,
          },
          {
            Header: "Title Jap",
            accessor: "titleJap",
            filter: "fuzzyText",
            aggregate: "uniqueCount",
            Aggregated: ({ value }: any) => `${value} Unique Names`,
          },
          {
            Header: "Group Name",
            accessor: "groupName",
            filter: "fuzzyText",
            aggregate: "uniqueCount",
            Aggregated: ({ value }: any) => `${value} Unique Names`,
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Released",
            accessor: "released",
            Filter: NumberRangeColumnFilter,
            filter: "between",
            aggregate: "average",
            Aggregated: ({ value }: any) => `${value} (avg)`,
          },
          {
            Header: "Status",
            accessor: "status",
            Filter: SelectColumnFilter,
            filter: "includes",
            canGroupBy: false,
          },
          {
            Header: "Type",
            accessor: "type",
            Filter: SelectColumnFilter,
            filter: "includes",
            canGroupBy: false,
          },
          {
            Header: "Episodes",
            accessor: "episodesCount",
            Filter: SliderColumnFilter,
            filter: filterGreaterThan,
            aggregate: roundedMedian,
            Aggregated: ({ value }: any) => `${value} (med)`,
            canGroupBy: false,
          },
        ],
      },
      {
        Header: "Media",
        columns: [
          {
            Header: "Logo",
            accessor: "logo",
          },
          {
            Header: "Banner",
            accessor: "banner",
          },
          {
            Header: "Trailer",
            accessor: "trailer",
          },
        ],
      },
    ],
    []
  );

  //     * STATES
  const [data, setData] = React.useState(entries);
  const [originalData] = React.useState(data);

  //     * USE-REFS
  const skipResetRef = React.useRef(false);

  //     * USE-EFFECTS
  React.useEffect(() => {
    skipResetRef.current = false;
  }, [data]);

  //     * HOOKS

  //     * HANDLERS
  const updateMyData = (rowIndex, columnId, value) => {
    skipResetRef.current = true;
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const resetData = () => {
    skipResetRef.current = true;
    setData(originalData);
  };

  // !--- RENDER ---!
  return (
    <Styles>
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </Styles>
  );
};

export default TableContainer;
