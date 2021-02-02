function formatDuration(time) {
  if (time === 0) {
    return 'now';
  }

  let afterCalcTime = time;

  const answers = [];

  const duration = {
    years: 0,
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  if (afterCalcTime / (365 * 24 * 60 * 60) >= 1) {
    duration.years = Math.floor(afterCalcTime / (365 * 24 * 60 * 60));
    afterCalcTime -= duration.years * 365 * 24 * 60 * 60;

    if (duration.years >= 2) {
      answers.push(`${duration.years} years`);
    } else {
      answers.push(`${duration.years} year`);
    }
  }

  if (afterCalcTime / (24 * 60 * 60) >= 1) {
    duration.days = Math.floor(afterCalcTime / (24 * 60 * 60));
    afterCalcTime -= duration.days * 24 * 60 * 60;

    if (duration.days >= 2) {
      answers.push(`${duration.days} day`);
    } else {
      answers.push(`${duration.days} day`);
    }
  }

  if (afterCalcTime / (60 * 60) >= 1) {
    duration.hours = Math.floor(afterCalcTime / (60 * 60));
    afterCalcTime -= duration.hours * 60 * 60;

    if (duration.hours >= 2) {
      answers.push(`${duration.hours} hours`);
    } else {
      answers.push(`${duration.hours} hour`);
    }
  }

  if (afterCalcTime / (60) >= 1) {
    duration.mins = Math.floor(afterCalcTime / (60));
    afterCalcTime -= duration.mins * 60;

    if (duration.mins >= 2) {
      answers.push(`${duration.mins} minutes`);
    } else {
      answers.push(`${duration.mins} minute`);
    }
  }

  if (time >= 1) {
    duration.secs = afterCalcTime;

    if (duration.secs >= 2) {
      answers.push(`${duration.secs} seconds`);
    } else {
      answers.push(`${duration.secs} second`);
    }
  }

  if (answers.length === 1) {
    return answers[0];
  }

  if (answers.length > 2) {
    let text = '';

    for (let i = 0; i < answers.length - 2; i += 1) {
      text += `${answers[i]}, `;
    }

    text += `${answers[answers.length - 2]} and ${answers[answers.length - 1]}`;

    return text;
  }

  if (answers.length === 2) {
    const a = `${answers[0]} and ${answers[1]}`;

    return a;
  }

  return 'error';
}

test('format', () => {
  expect(formatDuration(0)).toBe('now');
  expect(formatDuration(62)).toBe('1 minute and 2 seconds');
  expect(formatDuration(3662)).toBe('1 hour, 1 minute and 2 seconds');
});
