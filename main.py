import datetime, calendar, math

class Calendar:
    # ① 初期化処理を書いてみよう
    # Arguments: 年(int), 月(int)
    # Return: null
    def __init__(self, year, month):
        self.year = year
        self.month = month
        self.week = 7
        # 月の日数
        self.count = self.count_day()
        # 余り日数
        self.rem_days = self.count % self.week
        # 初週の日数
        self.first_week_days = self.week - self.count_beginning_blank()

    # ② 年を返すメソッドを作成しましょう
    # Arguments: なし
    # Return: 年(int)
    def year(self) -> int:
        self.year

    # ③ 日数を返すメソッドを作成しましょう
    # Arguments: なし
    # Return: 日数(int)
    def count_day(self) -> int:
        return calendar.monthrange(self.year, self.month)[1]

    # ④ 週の数を返すメソッドを作成しましょう
    # ④-1 count_dayを利用しよう
    # ④-2 ⑥を利用しよう
    # Arguments: なし
    # Return: 週の数(int)
    def count_week(self) -> int:
        # 最低の週数
        min_count = math.floor(self.count / self.week)
        #「月の日数 % 7」の余りがない場合は0、余りが最初の週の日数を超える場合は2、そうでない場合は1
        add_count = 0 if self.rem_days == 0 else 2 if self.rem_days > self.first_week_days else 1
        return min_count + add_count

    # ⑤ 月初めの空白数
    # Arguments
    # Return 年(int)
    def count_beginning_blank(self) -> int:
        weekday = datetime.date(self.year, self.month, 1).weekday()
        # weekday関数を月曜0から日曜0に変換
        conv_weekday = 0 if weekday == 6 else weekday + 1
        return conv_weekday

    # ⑥ 引数のDateが週末か（初めてのprivate関数）
    # Arguments 日付(Date型)
    # Return 週末か(bool)
    def __is_weekend(self, date) -> bool:
        return True if date.weekday() == 0 or date.weekday() == 6 else False

    # ⑦ カレンダーを出力しよう
    # Arguments: なし
    # Return: なし
    def print_calendar(self) -> None:
        def p(v):
            print(v, end="")
        arr = []
        # 初週のblank
        blank = '-- '
        count_beginning_blank = self.count_beginning_blank()
        for i in range(count_beginning_blank):
            arr.append(blank)
        # 月の日数
        count = self.count_day()
        for i in range(1, count + 1):
            i = str(i)
            arr.append('0' + i + ' ') if len(i) == 1 else arr.append(i + ' ')
        # 最終週のblank
        last_week = self.rem_days - self.first_week_days
        count_last_week_blank = 0 if last_week == 0 else self.week - last_week if last_week >= 0  else -last_week
        for i in range(count_last_week_blank):
            arr.append(blank)
        # 改行
        calendar = []
        for i, day in enumerate(arr):
            calendar.append(f'{day}\n') if (int(i + 1) % self.week) == 0 else calendar.append(day)
        # 描画
        space =  '        ' if len(str(self.month)) == 1 else '       '
        title = f'{self.year}/{self.month}{space}{self.count_week()}週{count}日\n'
        p(title)
        p('S  M  T  W  T  F  S \n')
        for day in calendar:
            p(day)
        p('\n')

def create_calendar(year,count_range) -> None:
    for count in range(count_range):
        if count == 0:
            year
        else:
            year += 1
        for month in range(1,13):
            Calendar(year,month).print_calendar()

create_calendar(2000,100)