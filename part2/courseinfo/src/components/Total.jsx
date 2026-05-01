const Total = ({ parts }) => <p> <b>Number of exercises</b> {parts.reduce((acc, part) => part.exercises + acc, 0)}</p>;


export default Total