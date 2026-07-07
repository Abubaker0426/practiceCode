
use survey_db;
CREATE TABLE member_user (
    m_id INT NOT NULL AUTO_INCREMENT primary key,
    id_fk INT DEFAULT NULL,
    name_of_hd_of_family VARCHAR(150) DEFAULT NULL,
    total_no_of_fmly_mem INT DEFAULT NULL,
    name VARCHAR(250) DEFAULT NULL,
    age INT DEFAULT NULL,
    gender ENUM('male', 'female', 'others') DEFAULT NULL,
    role ENUM('parent','spouse','child','grandchild','sibling','other') DEFAULT NULL,
    marital_status ENUM('single','married','divorced','widowed') DEFAULT NULL,
    education VARCHAR(100) DEFAULT NULL,
    attending_school ENUM('yes', 'no', 'dropout') DEFAULT NULL,
    attending_madrasa ENUM('yes', 'no') DEFAULT NULL,
    occupation ENUM(' employed','unemployed','self-employed') DEFAULT NULL,
    source_of_income VARCHAR(100) DEFAULT NULL,
    monthly_income INT DEFAULT NULL,
    aadhaar_card ENUM('yes', 'no') DEFAULT NULL,
    voter_id_card ENUM('yes', 'no') DEFAULT NULL,
    health_card ENUM('yes', 'no') DEFAULT NULL,
    are_you ENUM('orphan', 'widow','disabled','none of the above') DEFAULT NULL,
    chronic_disease ENUM('yes', 'no') DEFAULT NULL,
    ration_card ENUM('yes', 'no') DEFAULT NULL,
    labour_card ENUM('yes', 'no') DEFAULT NULL,
    card_type ENUM('APL','BPL','AAY','none'),
    bank_account ENUM('yes', 'no') DEFAULT NULL,
    house_type ENUM('own', 'rent') DEFAULT NULL,
    ownership ENUM('yes', 'no') DEFAULT NULL,
    electricity ENUM('yes', 'no') DEFAULT NULL,
    water_connection ENUM('yes', 'no') DEFAULT NULL,
    toilet ENUM('yes', 'no') DEFAULT NULL,
    mode_of_transport VARCHAR(50) DEFAULT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

select * from member_user;
SHOW TABLES  ;

 
