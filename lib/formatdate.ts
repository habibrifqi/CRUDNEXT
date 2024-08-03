export const convertToIndonesiaFormat = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',   
    
        timeZone: 'Asia/Jakarta'
      };
      return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
 };