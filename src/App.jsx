const App = () => {
  const subjects = ['math', 'english', 'georgian'];
  const weeks = ['Week1', 'Week2', 'Week3'];
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]);
  const [students, setStudents] = useState([
    { 
      id: 1, 
      name: 'John', 
      surname: 'Doe', 
      grades: {
        math: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        english: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        },
        georgian: {
          Week1: [null, null, null, null, null],
          Week2: [null, null, null, null, null],
          Week3: [null, null, null, null, null]
        }
      } 
    },
  ]);
}