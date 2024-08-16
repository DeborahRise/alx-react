import { Seq } from 'immutable';


const printBestStudents = (grades) => {
    const students = Seq(grades)
        .filter(student => student.score > 70)
        .map(student => ({
            ...student,
            firstName: capitalizeFirstLetter(student.firstName),
            lastName: capitalizeFirstLetter(student.lastName),
        }))
        .toJS();
    return students;
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default printBestStudents;
