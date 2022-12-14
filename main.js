class Calendar {
  week = 7;
  count;
  remDays;
  firstWeekDays;
  minCount;
  /**
   * ① 初期化処理を書いてみよう
   * Arguments: 年(int), 月(int)
   * Return: null
   */
  constructor(_year, _month) {
    this._year = _year;
    this._month = _month;
    //月の日数
    this.count = this.countDay();
    //余り日数
    this.remDays = this.count % this.week;
    //初週の日数
    this.firstWeekDays = this.week - this.countBeginningBlank();
    //最低の週数
    this.minCount = Math.floor(this.count / this.week);
  }

  /**
   * ② 年を返すメソッドを作成しましょう
   * Arguments: なし
   * Return: 年(int)
   */
  get year() {
    return this._year;
  }
  /**
   * ③ 日数を返すメソッドを作成しましょう
   * Arguments: なし
   * Return: 日数(int)
   */
  countDay() {
    let month = new Date(this._year, this._month, 0);
    let days = month.getDate();
    return days;
  }

  /**
   * ④ 週の数を返すメソッドを作成しましょう
   * ④-1 count_dayを利用しよう
   * ④-2 ⑥を利用しよう
   * Arguments: なし
   * Return: 週の数(int)
   */
  // ④-1 count_dayを利用しよう
  countWeek() {
    //「月の日数 % 7」の余りがない場合は0、余りが最初の週の日数を超える場合は2、そうでない場合は1
    let addCount =
      this.remDays === 0 ? 0 : this.remDays > this.firstWeekDays ? 2 : 1;
    return this.minCount + addCount;
  }

  /**
   * ⑤ 月初めの空白数
   * Arguments
   * Return 年(int)
   */
  countBeginningBlank() {
    return new Date(`${this._year}-${this._month}-1 09:00:00`).getDay();
  }

  /**
   * ⑥ 引数のDateが週末か（初めてのprivate関数）
   * Arguments 日付(Date型)
   * Return 週末か(bool)
   */
  _isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  /**
   * ⑦ カレンダーを出力しよう
   * Arguments: なし
   * Return: なし
   */
  print() {
    const p = (v) => process.stdout.write(v);
    const blank = '-- ';
    let arr = [];
    let count = this.countDay();
    let countBeginningBlank = this.countBeginningBlank();
    //初週のblank
    for (let i = 1; i <= countBeginningBlank; i++) arr.push(blank);
    //月の日数
    for (let i = 1; i <= count; i++) {
      i = String(i);
      i.length === 1 ? arr.push('0' + i + ' ') : arr.push(i + ' ');
    }
    //最終週のblank
    let lastWeek = this.remDays - this.firstWeekDays;
    let countLastWeekBlank =
      lastWeek === 0 ? 0 : lastWeek >= 0 ? this.week - lastWeek : -lastWeek;
    for (let i = 1; i <= countLastWeekBlank; i++) arr.push(blank);
    //改行
    let calender = arr.map((v, i) =>
      (i + 1) % this.week === 0 ? v + '\n' : v
    );
    //タイトル
    let space = String(this._month).length === 1 ? '       ' : '      ';
    let title = `${this._year}/${
      this._month
    }${space}${this.countWeek()}週 ${count}日\n`;
    //描画
    p(title);
    p('S  M  T  W  T  F  S \n');
    calender.forEach((v) => p(v));
    p('\n');
  }
}

/**
 * カレンダー生成
 * @param {number} beginYear 開始年度
 * @param {number} range 何年分
 */
const createCalendar = (beginYear, range) => {
  for (let y = 0; y <= range - 1; y++) {
    year = beginYear + y;
    for (let m = 1; m <= 12; m++) new Calendar(year, m).print();
  }
};

createCalendar(2000, 1);
