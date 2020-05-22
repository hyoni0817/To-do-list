import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
let id = 0;//hooks는 렌더링 될때 Main 컴포넌트 자체가 렌더링이 되므로 id가 렌더링 될 때마다 초기화가 되서 id 값이 증가하지 않는다. 그래서 Main 컴포넌트 밖에 둬야 한다.

const Main = () => {
    const [title, setTitle] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isImportant, setImportant] = useState(false);
    const [contents, setContents] = useState('');
    const [finalWriteDate, setFinalWriteDate] = useState(0);
    const inputRef = useRef(null);
    

    const [list, setList] = useState([]);
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        const date = new Date();
        const todayDate = `${date.getFullYear()}.${(date.getMonth() + 1)}.${date.getDate()} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

        setList((prevList) => 
            [...prevList, {
                    id: id++,
                    title: title,
                    endDate: endDate,
                    isImportant: isImportant,
                    contents: contents,
                    writeDate: todayDate,
                    finalWriteDate: finalWriteDate,
                }
            ]
        )
    
        setTitle('');
        setEndDate('');
        setContents('');
        setImportant(false);
        inputRef.current.focus();
    }

    const onChangeInputImportant = (e) => {
        setImportant(e.target.checked);       
    }

    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <input type="checkbox" id="important" name="isImportant" checked={isImportant} onChange={onChangeInputImportant}/>
                <label htmlFor="isImportant">중요</label><br></br>
                <input name="contents" value={contents} onChange={(e) => setContents(e.target.value)} />
                <button>추가</button>
            </form>
            <div>총 할일: {list.length}</div>
            <ul>
                {list.length === 0 ? null : list.map((v) => {
                   return <TodoList key={v.id} todoInfo={v} />
                })}
            </ul>
        </>
    );
};

export default Main;