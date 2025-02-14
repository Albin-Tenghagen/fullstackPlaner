import { useDispatch } from "react-redux";
import { removeActivity } from "../../ReducerFolder/travelSlice";

const ActivityDetail = ({ travelId, activity }) => {
  const dispatch = useDispatch();

  return (
    <li className="activity-detail">
      <h5>{activity.name}</h5>
      <p>
        <strong>Description:</strong> {activity.description}
      </p>
      <p>
        <strong>Duration:</strong> {activity.duration}
      </p>
      <p>
        <strong>Cost:</strong> {activity.cost}
      </p>
      <button
        onClick={() =>
          dispatch(removeActivity({ travelId, activityId: activity.id }))
        }
      >
        Remove Activity
      </button>
    </li>
  );
};

export default ActivityDetail;
