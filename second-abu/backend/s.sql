CREATE TABLE member_user (
    m_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_fk INT
);
ALTER TABLE member_user
MODIFY COLUMN id_fk  INT  DEFAULT NULL;

alter table member_user
add gender('male','female','other') default null,
school enum('yes''on''drop')default null,
created_at datetime not null,
updated_at datetime default null,
primary key(m_id))
engine = innoDB default
charset = utf8mb4
collate = utf8mb4_0900_ai_ci; 

ALTER TABLE member_user
ADD COLUMN gender ENUM('male', 'female', 'other') DEFAULT NULL,
ADD COLUMN school ENUM('yes', 'no', 'drop') DEFAULT NULL,
ADD COLUMN created_at DATETIME NOT NULL,
ADD COLUMN updated_at DATETIME DEFAULT NULL,
ADD PRIMARY KEY (m_id)
ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

ALTER TABLE member_user
ADD COLUMN gender ENUM('male', 'female', 'other') DEFAULT NULL,
ADD COLUMN school ENUM('yes', 'no', 'drop') DEFAULT NULL,
ADD COLUMN created_at DATETIME NOT NULL,
ADD COLUMN updated_at DATETIME DEFAULT NULL,
ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;





