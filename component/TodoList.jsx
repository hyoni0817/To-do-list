import React, {useState} from 'react';

const TodoList = (props) => {
    const {todoInfo, onUpdate} = props;
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isImportant, setImportant] = useState(false);
    const [contents, setContents] = useState('');
    
    const onClickUpdate = () => {
        const date = new Date();
        const finalWriteDate = `${date.getFullYear()}.${(date.getMonth() + 1)}.${date.getDate()} ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

        if(editing) {
            onUpdate(todoInfo.id, todoInfo.writeDate, {
                title: title,
                endDate: endDate,
                isImportant: isImportant,
                contents: contents,
                finalWriteDate: finalWriteDate,
            })
        } else {
            setTitle(todoInfo.title);
            setEndDate(todoInfo.endDate);
            setContents(todoInfo.contents);
            setImportant(todoInfo.isImportant);
        }
        setEditing(!editing);
    }

    const onChangeInputImportant = (e) => {
        setImportant(e.target.checked);       
    }
    
    const onClickDelete = () => {

    }

    return (
        <>
            <li>        
            {editing ? 
                <div>
                    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    <input type="checkbox" id="important" name="isImportant" checked={isImportant} onChange={onChangeInputImportant}/>
                    <label htmlFor="isImportant">중요</label><br></br>
                    <input name="contents" value={contents} onChange={(e) => setContents(e.target.value)} /> 
                </div>
            : 
                <div>
                    <p>제목: {todoInfo.title}{todoInfo.isImportant === true ? '(중요)' : ''}</p>
                    <p>완료일: {todoInfo.endDate}</p>
                    <p>내용: {todoInfo.contents}</p>
                    <p>작성일: {todoInfo.writeDate}</p>
                    {todoInfo.finalWriteDate === 0 ? null:<p>최종수정일: {todoInfo.finalWriteDate}</p>}
                </div>
            }
            <button onClick={onClickUpdate}>{ editing ? '적용' : '수정' }</button><button onClick={onClickDelete}>삭제</button>
            </li>
        </>          
    )
}

export default TodoList;