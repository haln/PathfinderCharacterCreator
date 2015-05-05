CREATE DATABASE IF NOT EXISTS Pathfinder;

USE Pathfinder;
DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS CHARACTERS;
DROP TABLE IF EXISTS RACE;
DROP TABLE IF EXISTS BARBARIAN;
DROP TABLE IF EXISTS BARD;
DROP TABLE IF EXISTS CLERIC;
DROP TABLE IF EXISTS DRUID;
DROP TABLE IF EXISTS FIGHTER;
DROP TABLE IF EXISTS MONK;
DROP TABLE IF EXISTS PALADIN;
DROP TABLE IF EXISTS RANGER;
DROP TABLE IF EXISTS ROGUE;
DROP TABLE IF EXISTS SORCERER;
DROP TABLE IF EXISTS WIZARD;
DROP TABLE IF EXISTS BONUS_SPELLS;
DROP TABLE IF EXISTS CLASSES;
DROP TABLE IF EXISTS SKILLS;

CREATE TABLE USERS(
USER_ID INT NOT NULL,
USER_NAME CHAR(30) NOT NULL,
USER_PASS CHAR(30) NOT NULL,
USER_EMAIL CHAR(50),
CONSTRAINT users_pk
PRIMARY KEY(USER_ID)
);

CREATE TABLE CHARACTERS(
CHAR_ID INT NOT NULL,
USER_ID INT,
STREN INT NOT NULL,
DEXTE INT NOT NULL,
CONST INT NOT NULL,
INTEL INT NOT NULL,
WISDO INT NOT NULL,
CHARI INT NOT NULL,
RACE  CHAR(15),
BARB_LVL INT,
BARD_LVL INT,
CLER_LVL INT,
DRUI_LVL INT,
FIGH_LVL INT,
MONK_LVL INT,
PALA_LVL INT,
RANG_LVL INT,
ROGU_LVL INT,
SORC_LVL INT,
WIZA_LVL INT,
CHAR_LVL INT,
CHAR_NAME CHAR(30),
CHAR_GEND CHAR(10),
CHAR_ALIG CHAR(15),
CHAR_DESC CHAR(255),
FAVOR_CLASS1 CHAR(30),
FAVOR_CLASS2 CHAR(30),
CHAR_HP INT,
CONSTRAINT characters_pk
PRIMARY KEY (CHAR_ID)
);

CREATE TABLE RACE(
RACE_NAME        CHAR(20) NOT NULL,
RACE_SIZE        CHAR(1)  NOT NULL,
RACE_SPEED       INT      NOT NULL,
RACE_SIGHT       CHAR(20) NOT NULL,
RACE_LANGUAGE    CHAR(50) NOT NULL,
RACE_SELECT_ATTR CHAR(1)  NOT NULL,
RACE_STR         INT      NOT NULL,
RACE_DEX         INT      NOT NULL,
RACE_CON         INT      NOT NULL,
RACE_INT         INT      NOT NULL,
RACE_WIS         INT      NOT NULL,
RACE_CHA         INT      NOT NULL,
CONSTRAINT race_pk
PRIMARY KEY(RACE_NAME)
);

CREATE TABLE CLASSES(
CLASS_NAME  CHAR(20)  NOT NULL,
CLASS_HP    INT       NOT NULL,
CLASS_SKILL INT       NOT NULL,
CONSTRAINT classes_pk
PRIMARY KEY (CLASS_NAME)
);

CREATE TABLE BARBARIAN(
BARB_LVL  INT NOT NULL,
BARB_BAB  INT NOT NULL,
BARB_FORT INT NOT NULL,
BARB_REFL INT NOT NULL,
BARB_WILL INT NOT NULL,
CONSTRAINT barbarian_pk
PRIMARY KEY (BARB_LVL)
);

CREATE TABLE BARD(
BARD_LVL  INT NOT NULL,
BARD_BAB  INT NOT NULL,
BARD_FORT INT NOT NULL,
BARD_REFL INT NOT NULL,
BARD_WILL INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
SPELL5    INT NOT NULL,
SPELL6    INT NOT NULL,
CONSTRAINT bard_pk
PRIMARY KEY (BARD_LVL)
);

CREATE TABLE CLERIC(
CLER_LVL  INT NOT NULL,
CLER_BAB  INT NOT NULL,
CLER_FORT INT NOT NULL,
CLER_REFL INT NOT NULL,
CLER_WILL INT NOT NULL,
SPELL0    INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
SPELL5    INT NOT NULL,
SPELL6    INT NOT NULL,
SPELL7    INT NOT NULL,
SPELL8    INT NOT NULL,
SPELL9    INT NOT NULL,
CONSTRAINT cleric_pk
PRIMARY KEY (CLER_LVL)
);

CREATE TABLE DRUID(
DRUI_LVL  INT NOT NULL,
DRUI_BAB  INT NOT NULL,
DRUI_FORT INT NOT NULL,
DRUI_REFL INT NOT NULL,
DRUI_WILL INT NOT NULL,
SPELL0    INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
SPELL5    INT NOT NULL,
SPELL6    INT NOT NULL,
SPELL7    INT NOT NULL,
SPELL8    INT NOT NULL,
SPELL9    INT NOT NULL,
CONSTRAINT druid_pk
PRIMARY KEY (DRUI_LVL)
);

CREATE TABLE FIGHTER(
FIGH_LVL  INT NOT NULL,
FIGH_BAB  INT NOT NULL,
FIGH_FORT INT NOT NULL,
FIGH_REFL INT NOT NULL,
FIGH_WILL INT NOT NULL,
CONSTRAINT fighter_pk
PRIMARY KEY (FIGH_LVL)
);

CREATE TABLE MONK(
MONK_LVL  INT NOT NULL,
MONK_BAB  INT NOT NULL,
MONK_FORT INT NOT NULL,
MONK_REFL INT NOT NULL,
MONK_WILL INT NOT NULL,
CONSTRAINT monk_pk
PRIMARY KEY (MONK_LVL)
);

CREATE TABLE PALADIN(
PALA_LVL  INT NOT NULL,
PALA_BAB  INT NOT NULL,
PALA_FORT INT NOT NULL,
PALA_REFL INT NOT NULL,
PALA_WILL INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
CONSTRAINT paladin_pk
PRIMARY KEY (PALA_LVL)
);

CREATE TABLE RANGER(
RANG_LVL  INT NOT NULL,
RANG_BAB  INT NOT NULL,
RANG_FORT INT NOT NULL,
RANG_REFL INT NOT NULL,
RANG_WILL INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
CONSTRAINT ranger_pk
PRIMARY KEY (RANG_LVL)
);

CREATE TABLE ROGUE(
ROGU_LVL  INT NOT NULL,
ROGU_BAB  INT NOT NULL,
ROGU_FORT INT NOT NULL,
ROGU_REFL INT NOT NULL,
ROGU_WILL INT NOT NULL,
CONSTRAINT rogue_pk
PRIMARY KEY (ROGU_LVL)
);

CREATE TABLE SORCERER(
SORC_LVL  INT NOT NULL,
SORC_BAB  INT NOT NULL,
SORC_FORT INT NOT NULL,
SORC_REFL INT NOT NULL,
SORC_WILL INT NOT NULL,
SPELL0    INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
SPELL5    INT NOT NULL,
SPELL6    INT NOT NULL,
SPELL7    INT NOT NULL,
SPELL8    INT NOT NULL,
SPELL9    INT NOT NULL,
CONSTRAINT sorcerer_pk
PRIMARY KEY (SORC_LVL)
);

CREATE TABLE WIZARD(
WIZA_LVL  INT NOT NULL,
WIZA_BAB  INT NOT NULL,
WIZA_FORT INT NOT NULL,
WIZA_REFL INT NOT NULL,
WIZA_WILL INT NOT NULL,
SPELL0    INT NOT NULL,
SPELL1    INT NOT NULL,
SPELL2    INT NOT NULL,
SPELL3    INT NOT NULL,
SPELL4    INT NOT NULL,
SPELL5    INT NOT NULL,
SPELL6    INT NOT NULL,
SPELL7    INT NOT NULL,
SPELL8    INT NOT NULL,
SPELL9    INT NOT NULL,
CONSTRAINT wizard_pk
PRIMARY KEY (WIZA_LVL)
);

CREATE TABLE BONUS_SPELLS (
MAIN_STAT_MOD INT NOT NULL,
LVL_1         INT NOT NULL,
LVL_2         INT NOT NULL,
LVL_3         INT NOT NULL,
LVL_4         INT NOT NULL,
LVL_5         INT NOT NULL,
LVL_6         INT NOT NULL,
LVL_7         INT NOT NULL,
LVL_8         INT NOT NULL,
LVL_9         INT NOT NULL,
CONSTRAINT bonus_pk
PRIMARY KEY (MAIN_STAT_MOD)
);

CREATE TABLE SKILLS(
SKILL_NAME CHAR(30) NOT NULL,
CSK_BARB   CHAR(1)  NOT NULL,
CSK_BARD   CHAR(1)  NOT NULL,
CSK_CLER   CHAR(1)  NOT NULL,
CSK_DRUI   CHAR(1)  NOT NULL,
CSK_FIGH   CHAR(1)  NOT NULL,
CSK_MONK   CHAR(1)  NOT NULL,
CSK_PALA   CHAR(1)  NOT NULL,
CSK_RANG   CHAR(1)  NOT NULL,
CSK_ROGU   CHAR(1)  NOT NULL,
CSK_SORC   CHAR(1)  NOT NULL,
CSK_WIZA   CHAR(1)  NOT NULL,
UNTRAINED  CHAR(1)  NOT NULL,
SKILL_STAT CHAR(3)  NOT NULL,
CONSTRAINT skills_pk
PRIMARY KEY (SKILL_NAME)
);

/*User Table Values*/
INSERT INTO USERS VALUES (
'0', 'JoeCool', '2cool4school', 'joecool@hotmail.ca');

/*Race Table Values*/
INSERT INTO RACE VALUES (
'Dwarf', 'M', '20', 'Darkvision', 'Common, Dwarven', 'N', '0', '0', '2', '0', '2', '-2');
INSERT INTO RACE VALUES (
'Elf', 'M', '30', 'Low-light Vision', 'Common, Elven', 'N', '0', '2', '-2', '2', '0', '0');
INSERT INTO RACE VALUES (
'Gnome', 'S', '20', 'Low-light Vision', 'Common, Gnome, Sylvan', 'N', '-2', '0', '2', '0', '0', '2');
INSERT INTO RACE VALUES (
'Half-Elf', 'M', '30', 'Low-light Vision', 'Common, Elven', 'Y', '0', '0', '0', '0', '0', '0');
INSERT INTO RACE VALUES (
'Half-Orc', 'M', '30', 'Darkvision', 'Common, Orcish', 'Y', '0', '0', '0', '0', '0', '0');
INSERT INTO RACE VALUES (
'Halfling', 'S', '20', 'Base', 'Common, Halfling', 'N', '-2', '2', '0', '0', '0', '2');
INSERT INTO RACE VALUES (
'Human', 'M', '30', 'Base', 'Common', 'Y', '0', '0', '0', '0', '0', '0');

/* ****************************************************************************
                                    CLASSES
**************************************************************************** */
/*Base Class Table*/
INSERT INTO CLASSES VALUES (
'BARBARIAN', '12', '4');
INSERT INTO CLASSES VALUES (
'BARD', '8', '6');
INSERT INTO CLASSES VALUES (
'CLERIC', '8', '2');
INSERT INTO CLASSES VALUES (
'DRUID', '8', '4');
INSERT INTO CLASSES VALUES (
'FIGHTER', '10', '2');
INSERT INTO CLASSES VALUES (
'MONK', '8', '4');
INSERT INTO CLASSES VALUES (
'PALADIN', '10', '2');
INSERT INTO CLASSES VALUES (
'RANGER', '10', '6');
INSERT INTO CLASSES VALUES (
'ROGUE', '8', '8');
INSERT INTO CLASSES VALUES (
'SORCERER', '6', '2');
INSERT INTO CLASSES VALUES (
'WIZARD', '6', '2');

/*Barbarian Table Values*/
INSERT INTO BARBARIAN VALUES (
'1', '1', '2', '0', '0');
INSERT INTO BARBARIAN VALUES (
'2', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'3', '1', '0', '1', '1');
INSERT INTO BARBARIAN VALUES (
'4', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'5', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'6', '1', '1', '1', '1');
INSERT INTO BARBARIAN VALUES (
'7', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'8', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'9', '1', '0', '1', '1');
INSERT INTO BARBARIAN VALUES (
'10', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'11', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'12', '1', '1', '1', '1');
INSERT INTO BARBARIAN VALUES (
'13', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'14', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'15', '1', '0', '1', '1');
INSERT INTO BARBARIAN VALUES (
'16', '1', '1', '0', '0');
INSERT INTO BARBARIAN VALUES (
'17', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'18', '1', '1', '1', '1');
INSERT INTO BARBARIAN VALUES (
'19', '1', '0', '0', '0');
INSERT INTO BARBARIAN VALUES (
'20', '1', '1', '0', '0');

/*Bard Table Values*/
INSERT INTO BARD VALUES (
'1', '0', '0', '2', '2', '1', '0', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'2', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'3', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'4', '1', '0', '1', '1', '0', '1', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'5', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'6', '1', '1', '1', '1', '0', '1', '0', '0', '0', '0');
INSERT INTO BARD VALUES (
'7', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO BARD VALUES (
'8', '1', '0', '1', '1', '0', '1', '1', '0', '0', '0');
INSERT INTO BARD VALUES (
'9', '0', '1', '0', '0', '1', '0', '1', '0', '0', '0');
INSERT INTO BARD VALUES (
'10', '1', '0', '1', '1', '0', '0', '0', '1', '0', '0');
INSERT INTO BARD VALUES (
'11', '1', '0', '0', '0', '0', '0', '1', '1', '0', '0');
INSERT INTO BARD VALUES (
'12', '1', '1', '1', '1', '0', '1', '0', '1', '0', '0');
INSERT INTO BARD VALUES (
'13', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO BARD VALUES (
'14', '1', '0', '1', '1', '0', '0', '0', '1', '1', '0');
INSERT INTO BARD VALUES (
'15', '1', '1', '0', '0', '0', '0', '1', '0', '1', '0');
INSERT INTO BARD VALUES (
'16', '1', '0', '1', '1', '0', '0', '0', '0', '0', '1');
INSERT INTO BARD VALUES (
'17', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO BARD VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '1', '0', '1');
INSERT INTO BARD VALUES (
'19', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO BARD VALUES (
'20', '1', '0', '1', '1', '0', '0', '0', '0', '0', '1');

/*Cleric Table Values*/
INSERT INTO CLERIC VALUES (
'1', '0', '2', '0', '2', '3', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'2', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'3', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'4', '1', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'5', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'6', '1', '1', '1', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'7', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'8', '1', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'9', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'10', '1', '1', '0', '1', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'11', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'12', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0');
INSERT INTO CLERIC VALUES (
'13', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0');
INSERT INTO CLERIC VALUES (
'14', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0');
INSERT INTO CLERIC VALUES (
'15', '1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0');
INSERT INTO CLERIC VALUES (
'16', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0');
INSERT INTO CLERIC VALUES (
'17', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1');
INSERT INTO CLERIC VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO CLERIC VALUES (
'19', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1');
INSERT INTO CLERIC VALUES (
'20', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');

/*Druid Table Values*/
INSERT INTO DRUID VALUES (
'1', '0', '2', '0', '2', '3', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'2', '1', '1', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'3', '1', '0', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'4', '1', '1', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'5', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'6', '1', '1', '1', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'7', '1', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'8', '1', '1', '0', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'9', '0', '0', '1', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'10', '1', '1', '0', '1', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0');
INSERT INTO DRUID VALUES (
'11', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0');
INSERT INTO DRUID VALUES (
'12', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0');
INSERT INTO DRUID VALUES (
'13', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0');
INSERT INTO DRUID VALUES (
'14', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0');
INSERT INTO DRUID VALUES (
'15', '1', '0', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0');
INSERT INTO DRUID VALUES (
'16', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0');
INSERT INTO DRUID VALUES (
'17', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1');
INSERT INTO DRUID VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO DRUID VALUES (
'19', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1');
INSERT INTO DRUID VALUES (
'20', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');

/*Fighter Table Values*/
INSERT INTO FIGHTER VALUES (
'1', '1', '2', '0', '0');
INSERT INTO FIGHTER VALUES (
'2', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'3', '1', '0', '1', '1');
INSERT INTO FIGHTER VALUES (
'4', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'5', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'6', '1', '1', '1', '1');
INSERT INTO FIGHTER VALUES (
'7', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'8', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'9', '1', '0', '1', '1');
INSERT INTO FIGHTER VALUES (
'10', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'11', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'12', '1', '1', '1', '1');
INSERT INTO FIGHTER VALUES (
'13', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'14', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'15', '1', '0', '1', '1');
INSERT INTO FIGHTER VALUES (
'16', '1', '1', '0', '0');
INSERT INTO FIGHTER VALUES (
'17', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'18', '1', '1', '1', '1');
INSERT INTO FIGHTER VALUES (
'19', '1', '0', '0', '0');
INSERT INTO FIGHTER VALUES (
'20', '1', '1', '0', '0');

/*Monk Table Values*/
INSERT INTO MONK VALUES (
'1', '0', '2', '2', '2');
INSERT INTO MONK VALUES (
'2', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'3', '1', '0', '0', '0');
INSERT INTO MONK VALUES (
'4', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'5', '0', '0', '0', '0');
INSERT INTO MONK VALUES (
'6', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'7', '1', '0', '0', '0');
INSERT INTO MONK VALUES (
'8', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'9', '0', '0', '0', '0');
INSERT INTO MONK VALUES (
'10', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'11', '1', '0', '0', '0');
INSERT INTO MONK VALUES (
'12', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'13', '0', '0', '0', '0');
INSERT INTO MONK VALUES (
'14', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'15', '1', '0', '0', '0');
INSERT INTO MONK VALUES (
'16', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'17', '0', '0', '0', '0');
INSERT INTO MONK VALUES (
'18', '1', '1', '1', '1');
INSERT INTO MONK VALUES (
'19', '1', '0', '0', '0');
INSERT INTO MONK VALUES (
'20', '1', '1', '1', '1');

/*Paladin Table Values*/
INSERT INTO PALADIN VALUES (
'1', '1', '2', '0', '2', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'2', '1', '1', '0', '1', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'3', '1', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'4', '1', '1', '0', '1', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'5', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'6', '1', '1', '1', '1', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'7', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'8', '1', '1', '0', '1', '0', '1', '0', '0');
INSERT INTO PALADIN VALUES (
'9', '1', '0', '1', '0', '1', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'10', '1', '1', '0', '1', '0', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'11', '1', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO PALADIN VALUES (
'12', '1', '1', '1', '1', '0', '1', '0', '0');
INSERT INTO PALADIN VALUES (
'13', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'14', '1', '1', '0', '1', '0', '0', '0', '1');
INSERT INTO PALADIN VALUES (
'15', '1', '0', '1', '0', '0', '0', '1', '0');
INSERT INTO PALADIN VALUES (
'16', '1', '1', '0', '1', '0', '1', '0', '0');
INSERT INTO PALADIN VALUES (
'17', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO PALADIN VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '1');
INSERT INTO PALADIN VALUES (
'19', '1', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO PALADIN VALUES (
'20', '1', '1', '0', '1', '0', '1', '0', '1');

/*Ranger Table Values*/
INSERT INTO RANGER VALUES (
'1', '1', '2', '2', '0', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'2', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'3', '1', '0', '0', '1', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'4', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'5', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO RANGER VALUES (
'6', '1', '1', '1', '1', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'7', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'8', '1', '1', '1', '0', '0', '1', '0', '0');
INSERT INTO RANGER VALUES (
'9', '1', '0', '0', '1', '1', '0', '0', '0');
INSERT INTO RANGER VALUES (
'10', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO RANGER VALUES (
'11', '1', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO RANGER VALUES (
'12', '1', '1', '1', '1', '0', '1', '0', '0');
INSERT INTO RANGER VALUES (
'13', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO RANGER VALUES (
'14', '1', '1', '1', '0', '0', '0', '0', '1');
INSERT INTO RANGER VALUES (
'15', '1', '0', '0', '1', '0', '0', '1', '0');
INSERT INTO RANGER VALUES (
'16', '1', '1', '1', '0', '0', '1', '0', '0');
INSERT INTO RANGER VALUES (
'17', '1', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO RANGER VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '1');
INSERT INTO RANGER VALUES (
'19', '1', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO RANGER VALUES (
'20', '1', '1', '1', '0', '0', '1', '0', '1');

/*Rogue Table Values*/
INSERT INTO ROGUE VALUES (
'1', '0', '0', '2', '0');
INSERT INTO ROGUE VALUES (
'2', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'3', '1', '1', '0', '1');
INSERT INTO ROGUE VALUES (
'4', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'5', '0', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'6', '1', '1', '1', '1');
INSERT INTO ROGUE VALUES (
'7', '1', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'8', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'9', '0', '1', '0', '1');
INSERT INTO ROGUE VALUES (
'10', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'11', '1', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'12', '1', '1', '1', '1');
INSERT INTO ROGUE VALUES (
'13', '0', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'14', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'15', '1', '1', '0', '1');
INSERT INTO ROGUE VALUES (
'16', '1', '0', '1', '0');
INSERT INTO ROGUE VALUES (
'17', '0', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'18', '1', '1', '1', '1');
INSERT INTO ROGUE VALUES (
'19', '1', '0', '0', '0');
INSERT INTO ROGUE VALUES (
'20', '1', '0', '1', '0');

/**Sorcerer Table Values*/
INSERT INTO SORCERER VALUES (
'1', '0', '0', '0', '2', '4', '2', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'2', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'3', '0', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'4', '1', '0', '0', '1', '1', '0', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'5', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'6', '1', '1', '1', '1', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'7', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'8', '1', '0', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'9', '0', '1', '1', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'10', '1', '0', '0', '1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'11', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1', '0', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'12', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'13', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0');
INSERT INTO SORCERER VALUES (
'14', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0');
INSERT INTO SORCERER VALUES (
'15', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0');
INSERT INTO SORCERER VALUES (
'16', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0');
INSERT INTO SORCERER VALUES (
'17', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0');
INSERT INTO SORCERER VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1');
INSERT INTO SORCERER VALUES (
'19', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO SORCERER VALUES (
'20', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1');

/*Wizard Table Values*/
INSERT INTO WIZARD VALUES (
'1', '0', '0', '0', '2', '3', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'2', '1', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'3', '0', '1', '1', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'4', '1', '0', '0', '1', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'5', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'6', '1', '1', '1', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'7', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'8', '1', '0', '0', '1', '0', '0', '0', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'9', '0', '1', '1', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'10', '1', '0', '0', '1', '0', '0', '0', '0', '1', '1', '0', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'11', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'12', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '0', '0', '0');
INSERT INTO WIZARD VALUES (
'13', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0', '0');
INSERT INTO WIZARD VALUES (
'14', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '1', '1', '0', '0');
INSERT INTO WIZARD VALUES (
'15', '0', '1', '1', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1', '0');
INSERT INTO WIZARD VALUES (
'16', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '1', '1', '0');
INSERT INTO WIZARD VALUES (
'17', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '0', '1');
INSERT INTO WIZARD VALUES (
'18', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');
INSERT INTO WIZARD VALUES (
'19', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0', '1');
INSERT INTO WIZARD VALUES (
'20', '1', '0', '0', '1', '0', '0', '0', '0', '0', '0', '0', '0', '1', '1');

/*Bonus Spell Table */
INSERT INTO BONUS_SPELLS VALUES (
'-5', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'-4', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'-3', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'-2', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'-1', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'1', '1', '0', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'2', '1', '1', '0', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'3', '1', '1', '1', '0', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'4', '1', '1', '1', '1', '0', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'5', '2', '1', '1', '1', '1', '0', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'6', '2', '2', '1', '1', '1', '1', '0', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'7', '2', '2', '2', '1', '1', '1', '1', '0', '0');
INSERT INTO BONUS_SPELLS VALUES (
'8', '2', '2', '2', '2', '1', '1', '1', '1', '0');
INSERT INTO BONUS_SPELLS VALUES (
'9', '3', '2', '2', '2', '2', '1', '1', '1', '1');
INSERT INTO BONUS_SPELLS VALUES (
'10', '3', '3', '2', '2', '2', '2', '1', '1', '1');
INSERT INTO BONUS_SPELLS VALUES (
'11', '3', '3', '3', '2', '2', '2', '2', '1', '1');
INSERT INTO BONUS_SPELLS VALUES (
'12', '3', '3', '3', '3', '2', '2', '2', '2', '1');
INSERT INTO BONUS_SPELLS VALUES (
'13', '4', '3', '3', '3', '3', '2', '2', '2', '2');
INSERT INTO BONUS_SPELLS VALUES (
'14', '4', '4', '3', '3', '3', '3', '2', '2', '2');
INSERT INTO BONUS_SPELLS VALUES (
'15', '4', '4', '4', '3', '3', '3', '3', '2', '2');
INSERT INTO BONUS_SPELLS VALUES (
'16', '4', '4', '4', '4', '3', '3', '3', '3', '2');
INSERT INTO BONUS_SPELLS VALUES (
'17', '5', '4', '4', '4', '4', '3', '3', '3', '3');

/* ****************************************************************************
                                    SKILLS
**************************************************************************** */

/*Skill Table*/
INSERT INTO SKILLS VALUES (
'Acrobatics', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'DEX');
INSERT INTO SKILLS VALUES (
'Appraise', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'Y', 'Y', 'INT');
INSERT INTO SKILLS VALUES (
'Bluff', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'CHA');
INSERT INTO SKILLS VALUES (
'Climb', 'Y', 'Y', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'STR');
INSERT INTO SKILLS VALUES (
'Craft', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'INT');
INSERT INTO SKILLS VALUES (
'Diplomacy', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'CHA');
INSERT INTO SKILLS VALUES (
'Disable Device', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'N', 'N', 'DEX');
INSERT INTO SKILLS VALUES (
'Disguise', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'CHA');
INSERT INTO SKILLS VALUES (
'Escape Artist', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'DEX');
INSERT INTO SKILLS VALUES (
'Fly', 'N', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'Y', 'DEX');
INSERT INTO SKILLS VALUES (
'Handle Animal', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'CHA');
INSERT INTO SKILLS VALUES (
'Heal', 'N', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'WIS');
INSERT INTO SKILLS VALUES (
'Intimidate', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'CHA');
INSERT INTO SKILLS VALUES (
'Knowledge(Arcana)', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Dungeoneering)', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Engineering)', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Geography)', 'N', 'Y', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(History)', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Local)', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Nature)', 'Y', 'Y', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Nobility)', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Planes)', 'N', 'Y', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Knowledge(Relgion)', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Linguistics', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Perception', 'Y', 'Y', 'N', 'Y', 'N', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'WIS');
INSERT INTO SKILLS VALUES (
'Perform', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'N', 'Y', 'N', 'N', 'Y', 'CHA');
INSERT INTO SKILLS VALUES (
'Profession', 'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'WIS');
INSERT INTO SKILLS VALUES (
'Ride', 'Y', 'N', 'N', 'Y', 'Y', 'Y', 'Y', 'Y', 'N', 'N', 'N', 'Y', 'DEX');
INSERT INTO SKILLS VALUES (
'Sense Motive', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'N', 'N', 'Y', 'WIS');
INSERT INTO SKILLS VALUES (
'Sleight of Hand', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'N', 'N', 'N', 'DEX');
INSERT INTO SKILLS VALUES (
'Spellcraft', 'N', 'Y', 'Y', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'INT');
INSERT INTO SKILLS VALUES (
'Stealth', 'N', 'Y', 'N', 'N', 'N', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'DEX');
INSERT INTO SKILLS VALUES (
'Survival', 'Y', 'N', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'N', 'N', 'N', 'Y', 'WIS');
INSERT INTO SKILLS VALUES (
'Swim', 'Y', 'N', 'N', 'Y', 'Y', 'Y', 'N', 'Y', 'Y', 'N', 'N', 'Y', 'STR');
INSERT INTO SKILLS VALUES (
'Use Magic Device', 'N', 'Y', 'N', 'N', 'N', 'N', 'N', 'N', 'Y', 'Y', 'N', 'N', 'CHA');

