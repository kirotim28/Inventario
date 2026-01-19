import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  AlertTriangle,
  Users,
  Search,
  User,
  LogOut,
  Edit,
  FileText,
  ChevronDown,
  X,
} from 'lucide-react';

// Sample data for the assets table
const sampleAssets = [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    serialNumber: 'DL-XPS-2024-001',
    category: 'Computación',
    status: 'Disponible',
    location: 'Oficina Principal',
  },
  {
    id: 2,
    name: 'Proyector Epson EB-X41',
    serialNumber: 'EP-EB-2023-045',
    category: 'Audiovisual',
    status: 'En Mantenimiento',
    location: 'Sala de Conferencias',
  },
  {
    id: 3,
    name: 'Silla Ergonómica',
    serialNumber: 'SE-ERG-2024-120',
    category: 'Mobiliario',
    status: 'Disponible',
    location: 'Oficina 2B',
  },
  {
    id: 4,
    name: 'Monitor LG 27"',
    serialNumber: 'LG-27-2023-078',
    category: 'Computación',
    status: 'Dado de Baja',
    location: 'Almacén',
  },
  {
    id: 5,
    name: 'Impresora HP LaserJet',
    serialNumber: 'HP-LJ-2024-032',
    category: 'Periféricos',
    status: 'Disponible',
    location: 'Área de Administración',
  },
  {
    id: 6,
    name: 'Escritorio Ejecutivo',
    serialNumber: 'ES-EXE-2023-095',
    category: 'Mobiliario',
    status: 'En Mantenimiento',
    location: 'Oficina Gerencia',
  },
];

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(null);
  const [reportForm, setReportForm] = useState({
    asset: '',
    description: '',
    urgency: 'Media',
  });

  // KPI data
  const kpiData = [
    { label: 'Total Activos', value: '156', color: 'blue', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
    { label: 'Disponibles', value: '98', color: 'green', bgColor: 'bg-green-50', textColor: 'text-green-600' },
    { label: 'En Mantenimiento', value: '42', color: 'yellow', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
    { label: 'Dados de Baja', value: '16', color: 'red', bgColor: 'bg-red-50', textColor: 'text-red-600' },
  ];

  // Sidebar menu items
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { name: 'Inventario', icon: Package, label: 'Inventario (R6)' },
    { name: 'Préstamos', icon: ClipboardList, label: 'Préstamos (R7)' },
    { name: 'Reportar Falla', icon: AlertTriangle, label: 'Reportar Falla (R14)' },
    { name: 'Usuarios', icon: Users, label: 'Usuarios (R5)' },
  ];

  // Status badge styling
  const getStatusBadge = (status) => {
    const badges = {
      'Disponible': 'bg-green-100 text-green-800 border border-green-200',
      'En Mantenimiento': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      'Dado de Baja': 'bg-red-100 text-red-800 border border-red-200',
    };
    return badges[status] || 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    console.log('Report submitted:', reportForm);
    setIsReportModalOpen(false);
    setReportForm({ asset: '', description: '', urgency: 'Media' });
    alert('Reporte de falla enviado exitosamente');
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg transition-all duration-300 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="font-bold text-xl text-gray-800">
            Sistema de Activos
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  if (item.name === 'Reportar Falla') {
                    setIsReportModalOpen(true);
                  }
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === item.name
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar por nombre, serie, categoría... (R11)"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4 ml-6">
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-gray-500">Administrador</p>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <LogOut size={18} />
                <span className="hidden md:inline">Cerrar sesión (R3)</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {kpiData.map((kpi, index) => (
              <div
                key={index}
                className={`${kpi.bgColor} rounded-lg shadow-md p-6 border border-gray-100`}
              >
                <h3 className="text-sm font-medium text-gray-600 mb-2">{kpi.label}</h3>
                <p className={`text-3xl font-bold ${kpi.textColor}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Assets Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Tabla de Activos</h2>
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition-colors"
              >
                <AlertTriangle size={18} />
                <span>Reportar Falla</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre del Activo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Número de Serie
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoría
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ubicación
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sampleAssets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{asset.serialNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{asset.category}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(
                            asset.status
                          )}`}
                        >
                          {asset.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{asset.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap relative">
                        <button
                          onClick={() => setIsActionsOpen(isActionsOpen === asset.id ? null : asset.id)}
                          className="flex items-center space-x-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          <span>Acciones</span>
                          <ChevronDown size={16} />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {isActionsOpen === asset.id && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-10">
                            <button
                              onClick={() => {
                                alert(`Editar perfil de: ${asset.name}`);
                                setIsActionsOpen(null);
                              }}
                              className="w-full flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              <Edit size={16} />
                              <span>Editar perfil del activo</span>
                            </button>
                            <button
                              onClick={() => {
                                alert(`Solicitar préstamo de: ${asset.name}`);
                                setIsActionsOpen(null);
                              }}
                              className="w-full flex items-center space-x-2 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                            >
                              <FileText size={16} />
                              <span>Solicitar Préstamo</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Report Failure Modal */}
      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <AlertTriangle className="text-orange-500" size={20} />
                <span>Reportar Falla (R14)</span>
              </h3>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleReportSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Selección de Activo
                </label>
                <select
                  value={reportForm.asset}
                  onChange={(e) => setReportForm({ ...reportForm, asset: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="">Seleccione un activo...</option>
                  {sampleAssets.map((asset) => (
                    <option key={asset.id} value={asset.id}>
                      {asset.name} - {asset.serialNumber}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descripción del Problema
                </label>
                <textarea
                  value={reportForm.description}
                  onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Describa el problema o falla del activo..."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nivel de Urgencia
                </label>
                <select
                  value={reportForm.urgency}
                  onChange={(e) => setReportForm({ ...reportForm, urgency: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                >
                  <option value="Baja">Baja</option>
                  <option value="Media">Media</option>
                  <option value="Alta">Alta</option>
                  <option value="Crítica">Crítica</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
                >
                  Enviar Reporte
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
