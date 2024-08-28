import User from "./User.js"
import Teacher from "./Teacher.js"
import Evaluation from "./Evaluation.js"
import Course from "./Course.js"

const associations = () => {
    Course.hasMany(Teacher);
    Course.hasMany(Evaluation);
    User.hasMany(Evaluation);
}

const factory = {
    associations
}

export default factory