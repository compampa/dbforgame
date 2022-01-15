'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('HitRU', [
      {
        {body_part: 'head',type_of_action: 'hit',description: 'Был нанесён грубый удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Ааа... Был нанесён жестокий удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Ты нещадно ударил прямо в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'О! Это был знатный удар по голове.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Был нанесен легкий удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Ты нанес крепкий удар по голове.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Ааа... это был коварный удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Противник пострадал от властного удара в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Ооо... сильный удар прилетел прямо в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Противник стал жертвой тяжелого удара по голове.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Это был сильный удар прямо в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Оууу... Был нанесен напористый удар по голове.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Был нанесен точный удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Это был ощутимый удар в голову.'},
        {body_part: 'head',type_of_action: 'hit',description: 'Был нанесен слабый удар в голову'},

        {body_part: 'head',type_of_action: 'crit',description: 'Воу! Был нанесён зверский удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Был нанесён беспощадный удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Ура! Противник получил жизнеопасный удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Был нанесён сокрушительный удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Это была резкая атака с мощным ударом в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Ооо да! Это был разрушительный удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Был нанесён уничтожающий удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Враг получил мощнейший удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Еее! Противник получил могучий удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Ооох! Это был очень опасный удар в голову. '},
        {body_part: 'head',type_of_action: 'crit',description: 'Да! Противник стал жертвой смертельного удара в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Ох ес! Твой противник получил беспощадный удар в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Чудовищный удар прилетел прямо в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Это был убийственный удар прямо в голову.'},
        {body_part: 'head',type_of_action: 'crit',description: 'Ох-ох! Был нанесён пронзительный удар в голову.'},

        {body_part: 'head',type_of_action: 'evasion',description: 'Ура! Ты уклонился от зверского удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Поздравляю! Ты уклонился от сокрушительного удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты спасся от уничтожающего удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Тебе удалось спастить от смертельного удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты уклонился от неукротимого удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Воу! Тебе удалось уклониться от чудовищного удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'О да! Ты избежал адского удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ох! Ты уклонился от кровожадного удара в затылок.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ес! Ты избежал мощного удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты уклонился от сильного удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Тебе удалось уклониться от жестокого удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты уклонился от крепкого удара в голову.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Этот удар в голову был тяжелым, но ты уклонился.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты избежал знатного удара по голове.'},
        {body_part: 'head',type_of_action: 'evasion',description: 'Ты уклонился от грубого удара в голову.'},

        {body_part: 'body',type_of_action: 'hit',description: 'Был нанесен ощутимый удар в спину.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Молодец! Ты нанес сильный удар в шею.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Твой властный удар попал прямо в живот.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Был нанесен тяжелый удар в грудь.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Крепкий удар был нанесен в спину.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Был нанесен могучий удар в шею.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Был насен сильный удар в грудь.'},
        {body_part: 'body',type_of_action: 'hit',description: 'В область живота был нанесен знатный удар.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Оу... Неплохой удар попал прямо в шею.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Был нанесен легкий удар в спину.'},
        {body_part: 'body',type_of_action: 'hit',description: 'Был нанесен слабый удар в грудь.'},

        {body_part: 'body',type_of_action: 'crit',description: 'Воу-воу! Был нанесён пронзительный удар в грудь.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Был нанесён беспощадный удар в спину.'},
        {body_part: 'body',type_of_action: 'crit',description: 'О да! Противник получил жизнеопасный удар в грудь.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Этот удар в живот был сокрушительным.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Это была резкая атака с неукротимым ударом в живот.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Ооо да! Это был разрушительный удар в шею.'},
        {body_part: 'body',type_of_action: 'crit',description: 'По спине был нанесён уничтожающий удар.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Противник получил мощнейший удар в живот.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Ес! Противник получил могучий удар в грудь.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Ооох! Это был очень опасный удар в шею.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Ура! Соперник стал жертвой смертельного удара в грудь.'},
        {body_part: 'body',type_of_action: 'crit',description: 'О да! Твой противник получил беспощадный удар живот.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Чудовищный удар прилетел прямо в грудь.'},
        {body_part: 'body',type_of_action: 'crit',description: 'Это был убийственный удар в область живота. '},
        {body_part: 'body',type_of_action: 'crit',description: 'Ес! Был нанесён зверский удар в спину.'},

        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от свирепого удара в шею.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Это мог быть сильный удар в шею, но ты уклонился!'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Воу! Ты избежал беспощадного удара в спину.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ура! Ты уклонился от смертельного удара в грудь.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от зверского удара в спину.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Тебе удалось спастись от сокрушительного удара в живот.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Этот удар в живот был убийственным, но ты уклонился.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от чудовищного удара в грудь.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от беспощадного удара в спину.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от могучего удара в шею.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Тебе удалось уйти от жестокого удара в живот.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ты уклонился от могущественного удара в спину.'},
        {body_part: 'body',type_of_action: 'evasion',description: 'Ох! Ты уклонился от разрушающего удара в живот.'},

        {body_part: 'legs',type_of_action: 'hit',description: 'Ай! Это был могучий удар по ноге.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Ааа... Был нанесён жестокий удар по ногам'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Ты нещадно ударил в левую ногу'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Правая нога пострадала от знатного удара.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Был нанесён пронзительный удар в колено.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Соперник получил крепкий удар в ногу.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Ааа... это был коварный удар в коленную чашечку.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Был нанесен властный удар в ногу.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Противник стал жертвой сильного удара по ногам.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Был нанесен тяжелый удар в правую ногу.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Это был сильный удар в левую ногу.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Оууу... Был нанесен напористый удар по ногам.'},
        {body_part: 'legs',type_of_action: 'hit',description: 'Был нанесен точный удар в ногу.'},

        {body_part: 'legs',type_of_action: 'crit',description: 'Ес! Был нанесён зверский удар по ногам.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Ты нанес беспощадный удар в правую ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Ох! Ты нанес сокрушительный удар в legs.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Это была резкая атака с мощным ударом в левую ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Ооо да! Это был разрушительный удар по ногам.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Был нанесён уничтожающий удар в ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Есть! Противник получил мощнейший удар по коленям.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'О да! Враг получил могучий удар в ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Ооох! Это был очень опасный удар по ногам.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Ох ес! Противник стал жертвой смертельного удара по ногам.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Сильно! Ты нанес беспощадный удар в ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Чудовищный удар прилетел прямо в правую ногу.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Это был убийственный удар по ногам.'},
        {body_part: 'legs',type_of_action: 'crit',description: 'Вау! Был нанесён пронзительный удар в левую ногу.'},
 

        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты уклонился от острого удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты спасся от сильного удара по ногам.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Тебе удалось уклониться от чудовищного удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Молодец! Ты уклонился от сокрушительного удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты уклогнился от опасного удара в левую ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Тебе удалось спастись от могучего удара по правой ноге.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты уклонился от пронзительного удара в legs.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты избежал крепкого удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Поздравляю! Ты уклонился от знатного удара по ногам.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты уклонился от зверского удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Тебе удалось уйти от нещадного удара в ногу.'},
        {body_part: 'legs',type_of_action: 'evasion',description: 'Ты уклонился от разрушающего удара в ногу.'},




  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('HitRU', null, {});
  }
};
