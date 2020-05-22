import React from 'react';

const TodoList = (props) => {
    const {todoInfo} = props;

    return (
        <>
            <li>
                <div>
                    <p>제목: {todoInfo.title}{todoInfo.isImportant === true ? '(중요)' : ''}</p>
                    <p>완료일: {todoInfo.endDate}</p>
                    <p>내용: {todoInfo.contents}</p>
                    <p>작성일: {todoInfo.writeDate}</p>
                    {todoInfo.finalWriteDate === 0 ? null:<p>최종수정일: {todoInfo.finalWriteDate}</p>}
                    <button>수정</button><button>삭제</button>
                </div>
            </li>

        </>
    )
}

export default TodoList;