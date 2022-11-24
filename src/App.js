import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios'
import imgCode from './images/code.png'

function App() {
  const [answer, setAnswer] = useState([
    {
      name: 'Câu 1',
      question: 'Khi truy cập một trang web trình duyệt sẽ làm gì?',
      dapAn: 'Khi truy cập một trang web thì DNS sẽ tìm địa chỉ IP dựa trên tên miền người dùng nhập vào, sau đó sẽ gửi HTTP request tới server và server nhận, xử lý rồi trả về response. Browser sẽ dùng các response để hiển thị cho người dùng.'
    },
    {
      name: 'Câu 2',
      question: 'Nếu có 2 css styles cùng ứng với một element thì style của element sẽ được thể hiện như thế nào?',
      dapAn: 'Nếu có 2 css styles cùng ứng với một element thì style của element sẽ được lấy là css style thứ hai. (trường hợp 2 css style khác nhau thì element sẽ được lấy cả css tyle thứ nhất và css style thứ hai)'
    },
    {
      name: 'Câu 3',
      question: 'Tại sao Javascript lại có cơ chễ xử lý bất đồng bộ. Có những cách nào để xử lý bất đồng bộ trong Javascript?',
      dapAn: 'Javascript có cơ chế bất đồng bộ vì để có thể xử lý nhiều yêu cầu cùng lúc mà trong một khoảng thời gian ngắn. (Ví dụ: chúng ta có 20 dòng code, chương trình sẽ chạy thứ tự từ trên xuông dưới tuy nhiên có những dòng sẽ xử lý mất khoảng 30s, sử dụng bất đồng bộ sẽ không cần đợi tác vụ này hoàn thành mà vẫn đảm bảo các tác vụ sau được tiếp tục thực hiện). Có 3 cách xử lý bất đồng bộ đó là: call back, async/await, promise.'
    }
  ])
  const [answerActive, setAnswerActive] = useState(0)
  const [userTask, setUserTask] = useState([])
  const [countTask, setCountTask] = useState(0)

  useEffect(() => {
    const getUserTask = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log(res.data.filter(d => d.userId === 5 && d.completed === false))
      setCountTask(res.data.filter(d => d.userId === 5 && d.completed === false).length)
    }
    getUserTask()
  }, [])
  //FUNCTION

  return (
    <div className="main">
      <div className="group-radio-button">
        <form>
          <input type="radio" value="Câu 1" name="rd" onClick={e => setAnswerActive(0)} /> Câu 1
          <input type="radio" value="Câu 2" name="rd" onClick={e => setAnswerActive(1)} /> Câu 2
          <input type="radio" value="Câu 3" name="rd" onClick={e => setAnswerActive(2)} /> Câu 3
        </form>
      </div>
      <div className="group-button">
        <button className={answerActive === 0 ? 'active' : null} >Câu 1</button>
        <button className={answerActive === 1 ? 'active' : null} >Câu 2</button>
        <button className={answerActive === 2 ? 'active' : null} >Câu 3</button>
        
      </div>
      <div className="answer">
        <h2>{answer[answerActive].name}: {answer[answerActive].question}</h2>
        <p>{answer[answerActive].dapAn}</p>
      </div>
      <div className='c3'>
        <h4>Số task chưa hoàn thành: {countTask}</h4>
      </div>
      <div className='c4'>
        <h4>Câu 4: </h4>
        <p>Sau khi chạy đoạn code trên student.score[0] có giá trị là <b>7.5</b>. <br></br>
          Giải thích: Vì <b>newStudent</b> được gán bằng <b>students</b> (đây là kiểu dữ liệu tham chiếu) cho nên student và newStudents sẽ cùng trỏ đến một ô nhớ, và khi ta thay đổi giá trị ở newStudents thì ở students cũng bị thay đổi theo. Lúc đầu newStudents.sort sẽ sắp xếp mảng object newStudents theo thứ tự tăng dần của điểm thì lúc này student.score[0] = 7. <br></br>
          Tiếp theo forEach sẽ gán lại score của mỗi phần tử trong newStudent bằng giá trị nhỏ nhất của 10 với score hiện tại của student + 0.5 thì lúc này student.score[0] = min(10, 7.5) và sẽ mang giá trị là 7.5
        </p>
        <p>Độ phức tạp của thuật toán: <b>O(n<sup>2</sup>)</b></p>
        <img src={imgCode} />
      </div>
    </div>
  );
}

export default App;
