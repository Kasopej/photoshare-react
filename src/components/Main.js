import List from "./List";

const tasks = ["Take out trash", "KIll cockroaches", "Pick up laundry"];

const MainHeading = function () {
  return (
    <ol>
      {tasks.map((task, index) => (
        <List task={task} key={index}></List>
      ))}
    </ol>
  );
};

export default MainHeading;
