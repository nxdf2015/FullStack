const Total = ({ parts }) => <p> Number of exercises {parts.reduce((acc, part) => part.exercises + acc, 0)}</p>;


export default Total