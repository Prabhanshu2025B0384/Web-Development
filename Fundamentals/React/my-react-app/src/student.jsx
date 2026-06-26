import PropTypes from 'prop-types'

function Student({ name = "Prabhanshu", age = 18, student = true }){
    return(
        <>
        <h1>Name = {name}</h1>
        <h2>Age = {age}</h2>
        <p>Student = {student ? "Yes" : "No"}</p>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
}

export default Student;