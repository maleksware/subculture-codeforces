const text = document.getElementsByClassName("user-rank")[0];

console.log(text);

const replacement = {
  "Не в рейтинге": "not a true ♂️man♂️",
  "Новичок": "♂️fucking slave♂️",
  "Ученик": "♂️boy next door♂️",
  "Специалист": "♂️College boy♂️",
  "Эксперт": "♂️Leatherman♂️",
  "Кандидат в мастера": "♂️Dungeon master♂️",
  "Международный мастер": "♂️Fantasy master♂️",
  "Мастер": "♂️Full master♂️",
  "Гроссмейстер": "♂️Boss of the gym♂️",
  "Международный гроссмейстер": "♂️International boss of the gym♂️",
  "Легендарный гроссмейстер": "♂️Legendary boss of the gym♂️"
};
text.innerText = replacement[text.innerText];
