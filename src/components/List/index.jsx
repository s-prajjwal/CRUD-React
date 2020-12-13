import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLeadsList } from "../../redux/actions";
import { ButtonType, TABLE_HEADINGS } from "../../utils/constants";
import ListItem from "../List Item";

const List = ({ leadsDataList, getLeadsData, modifyState }) => {
  useEffect(() => {
    getLeadsData();
  }, []);
  return (
    <div className="list-wrapper">
      <table className="leads_table">
        <thead>
          <tr>
            {TABLE_HEADINGS.map((heading) => {
              return <th key={heading}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {leadsDataList && leadsDataList.map((lead) => {
            return <ListItem lead={lead} modifyState={modifyState} />
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    leadsDataList: state.leadsReducer.leadsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLeadsData: () => {
      dispatch(getLeadsList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
