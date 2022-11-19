package model;

import java.time.LocalDateTime;
import java.util.Date;

public class Goal {
    private final LocalDateTime makeDate;
    private final LocalDateTime deadline;

    public Goal() {
        LocalDateTime date = LocalDateTime.now();
        makeDate = date;
        deadline = date.plusMonths(1);
    }

    public LocalDateTime getMakeDate() {
        return makeDate;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }
}
