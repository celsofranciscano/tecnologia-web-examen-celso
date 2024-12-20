INSERT INTO "tbroles" ("PK_role", "role") VALUES
(1, 'ingeniero'),
(2, 'Empleado')

INSERT INTO "tbusers" (
    "PK_user",
    "FK_role",
    "CI",
    "firstName",
    "lastName",
    "email",
    "password",
    "profileImage",
    "status",
    "createdAt",
    "updatedAt"
) VALUES
(1, 1, '9510358', 'Celso', 'Franciscano Choque', 'celso@gmail.com', '$2b$10$t2NqXh7YNAOecW5zvKmIqefEOmfHciZSCNYRMQBmrIDCD4dz26C/q', NULL, TRUE, '2024-10-30T09:35:23.055Z', NULL),
(2, 1, '9510359', 'Oscar', 'Flores', 'oscar@gmail.com', '$2b$10$HQRtc4O0QslIwnbh9AXA3.md3qwu64xGOWcow9dmDCR8bJEI1ENxu', NULL, TRUE, '2024-11-26T11:11:19.809Z', NULL);


UPDATE "tbusers" 
SET "FK_role" = 2
WHERE "PK_user" = 2;



INSERT INTO "tbusers" (
    "FK_role",
    "CI",
    "firstName",
    "lastName",
    "email",
    "password",
    "profileImage",
    "status",
    "createdAt",
    "updatedAt"
) VALUES
( 1, '9510358', 'Vladimir', 'Rojas', 'vladi@gmail.com', '$2b$10$ABC1234567890XYZ1234567890XYZ1234567890XYZ1234567890XYZ1234', NULL, TRUE, '2024-12-20T11:15:00.000Z', NULL);


INSERT INTO "tbdepartaments" (
    "PK_department",
    "department",
    "status",
    "createdAt",
    "updatedAt"
) VALUES
(1, 'Ventas', TRUE, '2024-10-30T09:35:23.055Z', NULL),
(2, 'Soporte', TRUE, '2024-10-30T09:35:23.055Z', NULL),
(3, 'Recursos Humanos', TRUE, '2024-10-30T09:35:23.055Z', NULL);



INSERT INTO "tbemployees" (
    "PK_employee",
    "FK_department",
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "observations",
    "birthDate",
    "salary",
    "status",
    "createdAt",
    "updatedAt"
) VALUES
(1, 1, 'Juan', 'Pérez', 'juan.perez@example.com', 123456789, 'Calle Principal 123', 'Mejor vendedor', '1985-05-10', 3000, TRUE, '2024-10-30T09:35:23.055Z', NULL),
(2, 2, 'María', 'González', 'maria.gonzalez@example.com', 987654321, 'Avenida Central 456', 'Excelente trabajo en equipo', '1990-08-15', 2500, TRUE, '2024-10-30T09:35:23.055Z', NULL),
(3, 3, 'Luis', 'Martínez', 'luis.martinez@example.com', 555123456, 'Calle Secundaria 789', NULL, '1992-12-20', 2800, TRUE, '2024-10-30T09:35:23.055Z', NULL);


INSERT INTO "tbcarsales" (
    "PK_sale",
    "carModel",
    "carBrand",
    "image",
    "description",
    "year",
    "price",
    "status",
    "createdAt",
    "updatedAt"
) VALUES
(1, 'Modelo S', 'Tesla', 'modelo_s.jpg', 'Sedán de lujo eléctrico', 2023, 79999.99, TRUE, '2024-10-30T09:35:23.055Z', NULL),
(2, 'Mustang', 'Ford', 'mustang.jpg', 'Auto deportivo de alto rendimiento', 2022, 55999.99, TRUE, '2024-10-30T09:35:23.055Z', NULL),
(3, 'Civic', 'Honda', 'civic.jpg', 'Auto compacto confiable y eficiente', 2021, 24999.99, TRUE, '2024-10-30T09:35:23.055Z', NULL);


