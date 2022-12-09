class Calendar {
  /**
   * ① 初期化処理を書いてみよう
   * Arguments: 年(int), 月(int)
   * Return: null
   */
  constructor(_year, _month) {
    this._year = _year;
    this._month = _month;
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
  getDaysInMonth() {
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
  // public func count_week () {
  //   //                   01
  //   // 02 03 04 05 06 07 08
  //   // 09 10 11 12 13 14 15
  //   // 16 17 18 19 20 21 22
  //   // 23 24 25 26 27 28 29
  //   // 30 31
  //   // の時 → 6

  //   // 01 02 03 04 05 06 07
  //   // 08 09 10 11 12 13 14
  //   // 15 16 17 18 19 20 21
  //   // 22 23 24 25 26 27 28
  //   // の時 → 4
  // }

  /**
   * ⑤ 月初めの空白数
   * Arguments
   * Return 年(int)
   */
  // public func count_beginning_blank () {
  //   //                   01
  //   // の時 → 6

  //   //       01 02 03 04 05
  //   // の時 → 2

  //   // 01 02 03 04 05 06 07
  //   // の時 → 0
  // }

  /**
   * ⑥ 引数のDateが週末か（初めてのprivate関数）
   * Arguments 日付(Date型)
   * Return 週末か(bool)
   */
  // private func is_weekend (date) {
  // }

  /**
   * ⑦ カレンダーを出力しよう
   * Arguments: なし
   * Return: なし
   */
  // public func print () {
  //   //                   01
  //   // 02 03 04 05 06 07 08
  //   // 09 10 11 12 13 14 15
  //   // 16 17 18 19 20 21 22
  //   // 23 24 25 26 27 28 29
  //   // 30 31
  // }
}

//インスタンス生成
let calender = new Calendar(2022, 2);
//②
console.log('年', calender.year);
//③
console.log('月の日数', calender.getDaysInMonth());
