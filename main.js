class Calendar {
  week = 7;
  count;
  remDays;
  firstWeekDays;
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
    //最低の週数
    let minCount = Math.floor(this.count / this.week);
    //「月の日数 % 7」の余りがない場合は0、余りが最初の週の日数を超える場合は2、そうでない場合は1
    let addCount =
      this.remDays === 0 ? 0 : this.remDays > this.firstWeekDays ? 2 : 1;
    return minCount + addCount;
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
    return date.getDay() === 0 || date.getDay() === 6 ? true : false;
  }

  /**
   * ⑦ カレンダーを出力しよう
   * Arguments: なし
   * Return: なし
   */
  print() {
    const p = (v) => process.stdout.write(v);
    let arr = [];
    let blank = '-- ';
    let count = this.countDay();
    let countBeginningBlank = this.countBeginningBlank();
    //最終週のblank日数算出
    let lastWeek = this.remDays - this.firstWeekDays;
    let countLastWeekBlank =
      lastWeek === 0 ? 0 : lastWeek >= 0 ? this.week - lastWeek : -lastWeek;
    //初週のblank
    for (let i = 1; i <= countBeginningBlank; i++) {
      arr.push(blank);
    }
    //月の日数
    for (let i = 1; i <= count; i++) {
      i = String(i);
      i.length === 1 ? arr.push('0' + i + ' ') : arr.push(i + ' ');
    }
    //最終週のblank
    for (let i = 1; i <= countLastWeekBlank; i++) {
      arr.push(blank);
    }
    //改行
    let calender = arr.map((v, i) =>
      (i + 1) % this.week === 0 ? v + '\n' : v
    );

    //描画
    p(`${this._year}/${this._month}\n`);
    p('S  M  T  W  T  F  S \n');
    calender.forEach((v) => p(v));
    p('\n');
  }
}

//インスタンス生成
let calender = new Calendar(1988, 1);
console.log('②', calender.year);
console.log('③', calender.countDay());
console.log('④', calender.countWeek());
console.log('⑤', calender.countBeginningBlank());
calender.print();
