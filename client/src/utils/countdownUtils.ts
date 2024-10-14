export const calculateTimeLeft = (targetDate: Date) => {
    const eventDate = new Date(targetDate);
    const currentDate = new Date();
    const timeLeft = eventDate.getTime() - currentDate.getTime();

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60).toString().padStart(2, '0');
        const seconds = Math.floor((timeLeft / 1000) % 60).toString().padStart(2, '0');

        return { days, hours, minutes, seconds };
    }

    const days = '00';
    const hours = '00';
    const minutes = '00';
    const seconds = '00';

    return { days, hours, minutes, seconds };

}