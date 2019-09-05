export const justify = (text: string, maxWidth: number) => {
  const find = (words: string[], length: number) => {
    const lines = [];
    let index = 0;

    while (index < words.length) {
      let count = words[index].length;
      let last = index + 1;

      while (last < words.length) {
        if (words[last].length + count + 1 > length) {
          break;
        }
        count += words[last].length + 1;
        last++;
      }

      let line = '';
      const difference = last - index - 1;

      // if on the last line or the number of words in the line is 1, we justify from left
      if (last === words.length || difference === 0) {
        for (let i = index; i < last; i++) {
          line += words[i] + ' ';
        }

        line = line.substr(0, line.length - 1);
        for (let i = line.length; i < length; i++) {
          line += ' ';
        }
      } else {
        // now we need to middle justify, which is putting equal amount of spaces between words
        const spaces = (length - count) / difference;
        const remainder = (length - count) % difference;

        for (let i = index; i < last; i++) {
          line += words[i];

          if (i < last - 1) {
            const limit = spaces + (i - index < remainder ? 1 : 0);
            for (let j = 0; j <= limit; j++) {
              line += ' ';
            }
          }
        }
      }

      lines.push(line);
      index = last;
    }

    return lines.join('\n').trim();
  };

  const arr = text
    .trim()
    .replace(/\n|\r/g, '\n')
    .replace(/ +/g, ' ')
    .split(' ');

  return find(arr, maxWidth);
};

export const countWords = (text: string): number => {
  return text
    .trim()
    .replace(/ +/g, ' ')
    .split(' ').length;
};
