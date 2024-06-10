import{ useEffect} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const TimerAlert = () => {
  useEffect(() => {
    let timerInterval;

    MySwal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
        const timer = MySwal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          timer.textContent = `${MySwal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return null; // This component doesn't render anything
};


export default TimerAlert;
