import CounterOutputItem from './CounterOutputItem';

const CounterOutput = ({ grades, onDelete }) => {
  return (
    <div className='counter-grades-wrapper'>
                <h2 className="text-purple">Grades:</h2>
                {!grades || grades.length == 0 &&
                <p className='no-grades-line'>No saved grades . . .</p>
                }
                {grades && grades.length > 0 && 
                <ul className='grades-output-list'>
                    {grades.map((grade) => 
                    
                        <CounterOutputItem
                        data={grade}
                        key={grade.id}
                        onDelete={onDelete}
                        />

                    )}
                </ul>}
            </div>
  )
}

export default CounterOutput